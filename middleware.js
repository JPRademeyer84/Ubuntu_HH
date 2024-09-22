import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token'); // Get the token from the cookies

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if no token
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the JWT token
    req.user = decoded; // Attach the decoded token to the request
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login on token failure
  }
}

// Specify routes to protect
export const config = {
  matcher: ['/dashboard/:path*'], // Add protected routes here (e.g., `/dashboard`)
};
