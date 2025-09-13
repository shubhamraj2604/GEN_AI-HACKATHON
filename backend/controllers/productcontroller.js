import { sql } from "../config/db.js";


export const getProducts = async (req, res) => {
  try {
    const products = await sql`
      SELECT p.*, a.artist_name, a.email, a.location
      FROM products AS p
      JOIN artist AS a
      ON a.artist_id = p.artist_id
      ORDER BY p.created_at DESC;
    `;

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching the products",
    });
  }
};


export const createProducts = async (req, res) => {
  const { name, image, category, description, artist_id } = req.body;

  if (!name || !image || !category || !description || !artist_id) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, image, category, description, and artist_id",
    });
  }

  try {
    const response = await sql`
      INSERT INTO products (name, image, category, description, artist_id)
      VALUES (${name}, ${image}, ${category}, ${description}, ${artist_id})
      RETURNING *;
    `;

    res.status(201).json({
      message: "Product added successfully",
      success: true,
      data: response[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error adding the product",
      success: false,
    });
  }
};
