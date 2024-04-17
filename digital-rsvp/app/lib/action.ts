'use server';
import { guests } from "./definition";
import React,{ useState } from 'react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from "@vercel/postgres"; 
import {z} from 'zod';

const FormSchema = z.object({
    rsvp_id: z.string(),
	  guest_id : z.string(),
	  name:z.string(),
	  rsvp_status: z.enum(['Accepted' , 'Decline']),
	  date: z.string()
  })

  const CreateRSVP = FormSchema.omit({rsvp_id:true, guest_id:true, date:true});
  
export async function createRSVP(formData: FormData) {
  const {name, rsvp_status}= CreateRSVP.parse({
    name: formData.get('name'),
    rsvp_status: formData.get('rsvp_status'),
  });
  // Test it out:
    const time = Date.now();
    const currentDate = new Date(time);
    const date = currentDate.toISOString();

  console.log(name + rsvp_status);

  const guestResult = await sql`
  INSERT INTO guests (id, name)
  VALUES (uuid_generate_v4(), ${name})
  RETURNING id;
  `;

  const guestId = guestResult.rows?.[0].id;
  
  await sql`
  INSERT INTO rsvp (guest_id, name, rsvp_status, date)
  VALUES (${guestId}, ${name}, ${rsvp_status}, ${date});
  `;

  revalidatePath('/submit');
  redirect('/rsvp_submit');

}