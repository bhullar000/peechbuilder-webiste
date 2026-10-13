interface ContactBody {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
  website?: string // honeypot: real visitors never see or fill this
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!)

const clean = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '')

export default defineEventHandler(async (event) => {
  const body = (await readBody<ContactBody>(event)) || {}

  // Bots fill every field; pretend success so they move on.
  if (clean(body.website, 200)) return { ok: true }

  const name = clean(body.name, 120)
  const email = clean(body.email, 200)
  const phone = clean(body.phone, 40)
  const company = clean(body.company, 160)
  const service = clean(body.service, 80)
  const message = clean(body.message, 5000)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Please fill in your name, email and message.' })
  }
  if (!EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address.' })
  }

  const config = useRuntimeConfig(event)
  if (!config.resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email is not configured.' })
  }

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Company', company || '—'],
    ['Interested in', service || '—'],
  ]

  const html = `
    <div style="font-family:Arial,sans-serif;color:#14233A;max-width:600px">
      <h2 style="margin:0 0 16px">New enquiry from peechbuilder.com</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows.map(([k, v]) => `<tr><td style="padding:8px 12px;border:1px solid #E3E8EF;background:#F3F6F9;width:140px"><strong>${k}</strong></td><td style="padding:8px 12px;border:1px solid #E3E8EF">${escapeHtml(v)}</td></tr>`).join('')}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;line-height:1.6;margin:0">${escapeHtml(message)}</p>
    </div>`

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${message}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${config.resendApiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: config.contactFrom,
      to: String(config.contactTo).split(',').map(s => s.trim()).filter(Boolean),
      reply_to: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html,
      text,
    }),
  })

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text())
    throw createError({ statusCode: 502, statusMessage: 'Could not send your message. Please email us directly.' })
  }

  return { ok: true }
})
