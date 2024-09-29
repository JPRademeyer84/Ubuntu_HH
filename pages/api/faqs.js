import FAQ from '../../models/FAQ';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const faqs = await FAQ.findAll({
        order: [['created_at', 'DESC']],
      });
      res.status(200).json(faqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      res.status(500).json({ error: 'Error fetching FAQs' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

