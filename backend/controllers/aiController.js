import { gemini } from "../services/gcpClients.js";
import { sql } from "../config/db.js";

// Story generation controller
export const generateStory = async (req, res) => {
  try {
    const { artistId, category, productName, emotion, prompt } = req.body;

    // fetch artisan name from DB
    const artist = await sql`
      SELECT artist_name FROM artist WHERE artist_id = ${artistId};
    `;

    const artisanName = artist[0]?.artist_name || "the artisan";

    // fallback prompt if user didn't write one
    const storyPrompt =
      prompt ||
      `Write a ${emotion} story about a handmade ${productName} in category ${category}, 
      created by ${artisanName}.`;

    const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent(storyPrompt);

    res.status(200).json({
      success: true,
      story: response.response.text(),
    });
  } catch (err) {
    console.error("❌ Error generating story:", err);
    res.status(500).json({ success: false, message: "AI story generation failed" });
  }
};
