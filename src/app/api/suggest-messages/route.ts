import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const streamingResponse = await genAI
      .getGenerativeModel({ model: 'gemini-1.0-pro' }) // Corrected model name
      .generateContentStream({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

    return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    // Assuming you have a standard error response structure
    return new Response(JSON.stringify({
      success: false,
      message: 'Error generating messages',
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}