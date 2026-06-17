import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt';
import { User } from '../models/User';

// Simple in-memory token blacklist for logout
const tokenBlacklist = new Set<string>();

export const register = async (name: string, email: string, password: string) => {
  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash password
  const password_hash = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    password_hash,
  });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

export const login = async (email: string, password: string) => {
  // Find user by email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Compare password with hash
  const passwordMatches = await bcrypt.compare(password, user.password_hash);
  if (!passwordMatches) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT token
  const secret = jwtConfig.secret;
  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, secret, {
    expiresIn: jwtConfig.expiresIn,
  } as any);

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};

export const logout = (token: string) => {
  // Add token to blacklist
  tokenBlacklist.add(token);
  return { message: 'Logged out successfully' };
};

export const isTokenBlacklisted = (token: string): boolean => {
  return tokenBlacklist.has(token);
};

export const getMe = async (userId: number) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
