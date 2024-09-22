import { hash } from 'bcryptjs'; // For password hashing
import User from '../../models/User';
import sequelize from '../../lib/sequelize';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    try {
      await sequelize.sync(); // Syncs the User model with the database

      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }

      // Hash the password before storing it in the database
      const hashedPassword = await hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        email,
        password: hashedPassword, // Store the hashed password
      });

      res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
      console.error(error);
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ error: 'Email is already in use' });
      }
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}