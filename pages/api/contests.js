import Contest from '../../models/Contest';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all contests from the Contests table
      const contests = await Contest.findAll();
      res.status(200).json(contests);
    } catch (error) {
      console.error('Error fetching contests:', error);
      res.status(500).json({ error: 'Error fetching contests' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
