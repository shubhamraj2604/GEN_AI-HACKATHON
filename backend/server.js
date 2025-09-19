import express from "express";
import useProduct from "../backend/routes/useProduct.js"
import artitist from './routes/artist.js'
import { sql } from "./config/db.js";
import dotenv from 'dotenv'
dotenv.config();
const app = express();
app.use(express.json());   // For the middleware
const PORT = 3000;


app.use('/api/products' , useProduct)
app.use('/api/user' , artitist)


async function initDb(params) {
  try {
    // First create artist table
    await sql`
      CREATE TABLE IF NOT EXISTS artist (
        artist_id SERIAL PRIMARY KEY,
        artist_name VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;


    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        artist_id INT REFERENCES artist(artist_id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

   await sql`
  ALTER TABLE products
  ADD COLUMN IF NOT EXISTS emotion VARCHAR(50);
`;
    console.log("✅ Database tables created successfully");
  } catch (error) {
    console.error("❌ Error creating database tables:", error);
  }
}
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
