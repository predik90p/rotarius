'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const payload = await getPayload({ config })

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const organization = formData.get('organization') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name: `${firstName} ${lastName}`.trim(),
        email,
        organization,
        subject,
        message,
      },
    })

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}
