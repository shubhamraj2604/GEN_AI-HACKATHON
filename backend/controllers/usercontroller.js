import { sql } from "../config/db.js";


export const getUser = async (req, res) => {
  const { id } = req.params; 
  try {
    const response = await sql`
      SELECT * FROM artist
      WHERE artist_id = ${id};
    `;

    res.status(200).json({
      message: "Artist fetched successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching artist details",
    });
  }
};

export const createartist = async (req, res) => {
  try {
    const { artist_name, location, email } = req.body;

    if (!artist_name || !email) {
      return res.status(400).json({
        success: false,
        message: "artist_name and email are required",
      });
    }

    const result = await sql`
      INSERT INTO artist (artist_name, location, email)
      VALUES (${artist_name}, ${location}, ${email})
      RETURNING *;
    `;

    res.status(201).json({
      success: true,
      message: "Artist created successfully",
      data: result[0],
    });
  } catch (err) {
    console.error("❌ Error inserting artist:", err);
    res.status(500).json({
      success: false,
      message: "Error creating artist",
      error: err.message,
    });
  }
};

export const getArtistProducts = async (req, res) => {
  const { id } = req.params; 
  try {
    const response = await sql`
      SELECT p.*, a.artist_name, a.email
      FROM products AS p
      JOIN artist AS a
      ON a.artist_id = p.artist_id
      WHERE p.artist_id = ${id}
      ORDER BY p.created_at DESC;
    `;

    res.status(200).json({
      message: "Products fetched successfully",
      success: true,
      data: response,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching artist products",
      success: false,
    });
  }
};
