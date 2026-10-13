// Local dev only — the static site posts to the Lambda in lambda/contact (NUXT_PUBLIC_CONTACT_ENDPOINT).
import { sendContact } from '../../lambda/contact/send.mjs'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  try {
    return await sendContact(await readBody(event), {
      resendApiKey: config.resendApiKey,
      contactFrom: config.contactFrom,
      contactTo: config.contactTo,
    })
  } catch (e: any) {
    throw createError({ statusCode: e.statusCode || 500, statusMessage: e.statusMessage || 'Something went wrong.' })
  }
})
