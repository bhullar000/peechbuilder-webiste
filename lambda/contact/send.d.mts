export function sendContact(
  body: Record<string, unknown> | null | undefined,
  config: { resendApiKey: string, contactFrom: string, contactTo: string },
): Promise<{ ok: true }>
