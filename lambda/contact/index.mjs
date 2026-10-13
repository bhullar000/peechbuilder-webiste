// AWS Lambda (Node.js 22, Function URL) handler for the website contact form.
// Env: RESEND_API_KEY, CONTACT_FROM, CONTACT_TO, ALLOWED_ORIGINS (comma-separated).
// Leave CORS off in the Function URL settings — it's handled here.
import { sendContact } from './send.mjs'

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://peechbuilder.com,https://www.peechbuilder.com')
  .split(',').map(s => s.trim()).filter(Boolean)

export async function handler(event) {
  const origin = event.headers?.origin || ''
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  }
  const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) })

  const method = event.requestContext?.http?.method
  if (method === 'OPTIONS') return { statusCode: 204, headers }
  if (method !== 'POST') return reply(405, { statusMessage: 'Method not allowed.' })

  let body
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString() : event.body
    body = JSON.parse(raw || '{}')
  } catch {
    return reply(400, { statusMessage: 'Invalid request.' })
  }

  try {
    return reply(200, await sendContact(body, {
      resendApiKey: process.env.RESEND_API_KEY || '',
      contactFrom: process.env.CONTACT_FROM || 'Peechbuilder Website <no-reply@peechbuilder.com>',
      contactTo: process.env.CONTACT_TO || 'admin@peechbuilder.com',
    }))
  } catch (e) {
    if (!e.statusCode) console.error(e)
    return reply(e.statusCode || 500, { statusMessage: e.statusMessage || 'Something went wrong.' })
  }
}
