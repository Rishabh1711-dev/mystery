import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json(); // useCompletion sends 'prompt', not 'userMessage'

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const promptText = `
      Create 3 open-ended, interesting questions for an anonymous message board. 
      Separate them by '||'. 
      Do not use numbers or introductions. 
      Example: What is your biggest fear?||Who is your secret crush?||What is a lie you told recently?
    `;

    const geminiStream = await model.generateContentStream(promptText);
    const stream = GoogleGenerativeAIStream(geminiStream);

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Service Error:", error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}