
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'assistant', text: string }[]) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  // Format history for Gemini API
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.text }]
  }));

  // Add the current message
  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are Eshura's AI support agent. 
        Your goal is to provide helpful, professional, and empathetic support to website visitors.
        You can handle questions about orders (like #ORD-45821), returns, shipping policies, and general company information.
        Keep your responses concise and naturally conversational.
        If you don't know an answer, offer to connect them to a human representative.
        Use friendly tones. Example: "I've checked your order. It's out for delivery and will arrive by tomorrow evening."`,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting to my brain right now. Could you try that again?";
  }
};
