import Winner from '../../models/Winners';  // Make sure this path is correct and the model is properly defined
import User from '../../models/User';
import Contest from '../../models/Contest';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all winners with related contest and user data
      const winners = await Winner.findAll({
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },  // Include user details
          { model: Contest, attributes: ['contest_id', 'title', 'prize'] },  // Include contest details
        ],
      });
      res.status(200).json(winners);
    } catch (error) {
      console.error('Error fetching winners:', error);
      res.status(500).json({ error: 'Error fetching winners' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
