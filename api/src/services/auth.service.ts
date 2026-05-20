import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt';

export const login = async (email: string, password: string) => {
  const passwordMatches = password === 'secret';
  if (!passwordMatches) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ email }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });

  return { token, user: { email } };
};

export const register = async (name: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return { id: 1, name, email, password: hashedPassword };
};
