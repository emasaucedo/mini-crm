import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^[0-9]+$/)
    .optional(),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  JWT_EXPIRES_IN: z.string().min(1),
});

const _env = envSchema.parse(process.env);

export const env = {
  PORT: Number(_env.PORT || 5000),
  DATABASE_URL: _env.DATABASE_URL,
  JWT_SECRET: _env.JWT_SECRET,
  JWT_EXPIRES_IN: _env.JWT_EXPIRES_IN,
};
