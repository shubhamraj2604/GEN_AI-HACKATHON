import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import vision from "@google-cloud/vision";
import { TranslationServiceClient } from "@google-cloud/translate";
import speech from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";

dotenv.config();

// Gemini client (text / story generation)
export const gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// GCP service clients (if needed later)
export const visionClient = new vision.ImageAnnotatorClient();
export const translateClient = new TranslationServiceClient();
export const speechClient = new speech.SpeechClient();
export const storageClient = new Storage();
