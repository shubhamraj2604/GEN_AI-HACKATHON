import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import vision from "@google-cloud/vision";
import { TranslationServiceClient } from "@google-cloud/translate";
import speech from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";

dotenv.config();

// Gemini client (text / story generation)
export const gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// GCP service clients
// They automatically read GOOGLE_APPLICATION_CREDENTIALS
// from the .env file (service-account.json path)
export const visionClient = new vision.ImageAnnotatorClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export const translateClient = new TranslationServiceClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export const speechClient = new speech.SpeechClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export const storageClient = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

