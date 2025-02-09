import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBPpaB0gOOfjI7ObcYRdUbyUHZ_PDMk-eY");

export async function getGeminiResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return { success: true, data: text };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to get response from AI" 
    };
  }
} 