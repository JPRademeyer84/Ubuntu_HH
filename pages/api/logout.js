import { blacklistToken } from '../../utils/blacklist';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    blacklistToken(token);

    res.status(200).json({ message: 'Successfully logged out' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
