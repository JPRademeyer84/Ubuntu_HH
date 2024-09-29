import Blog from '../../models/Blog';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all blog posts with the associated author details
      const blogs = await Blog.findAll({  // Ensure "blogs" is correctly defined here
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },  // Include author details
        ],
        order: [['created_at', 'DESC']],  // Optional: Order by most recent first
      });
      
      res.status(200).json(blogs);  // Use the correct variable "blogs" here
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Error fetching blog posts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
