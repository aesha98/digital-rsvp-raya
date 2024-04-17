// pages/api/rsvp.js
import { createRSVP } from '../../lib/action'; // Adjust the import path as necessary

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Assuming req.body matches the expected structure
      const result = await createRSVP(req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error('RSVP submission error:', error);
      res.status(500).json({ error: 'Failed to submit RSVP' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
