import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

console.log('Connected to DB:', process.env.DATABASE_URL);