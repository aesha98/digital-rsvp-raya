'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string(),
  rsvp_status: z.enum(['Accepted', 'Decline']),
});

export async function createRSVP(formData: { name: string; rsvp_status: 'Accepted' | 'Decline' }) {
  // Validate formData using Zod

  const validatedData = FormSchema.parse(formData);

  const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  try {
    await sql`BEGIN`
      // Assuming 'guests' and 'rsvp' are your table names
      // Insert guest name
      const guestResult = await sql`
        INSERT INTO guests (name)
        VALUES (${validatedData.name})
        RETURNING id; // Assuming there's an 'id' column to use as guest_id
      `;

      const guestId = guestResult[0].id; // Capture the inserted guest ID

      // Insert RSVP with guest ID
      await sql`
        INSERT INTO rsvp (guest_id, name, rsvp_status, date)
        VALUES (${guestId}, ${validatedData.name}, ${validatedData.rsvp_status}, ${date});
      `;

    // Commit the transaction
    await sql`COMMIT`;

    return { success: true, message: 'RSVP successfully recorded' };
  } catch (error) {
    console.error('Failed to insert RSVP data:', error);
    throw new Error('Database operation failed');
  }
}
