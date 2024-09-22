import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define the secret and token expiration (set as environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const TOKEN_EXPIRATION = '1h'; // Adjust token expiration as needed

export default async function loginHandler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });

    // Set token as HTTP-only cookie
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}; Secure; SameSite=Strict`);

    // Send response
    return res.status(200).json({ message: 'Login successful', user: { id: user.id, email: user.email } });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
