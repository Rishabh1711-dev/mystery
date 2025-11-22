import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { userMessage } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    // Use a correct valid model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    // Ask for confession suggestions
    const prompt = `
You are an AI that generates short confession-style message suggestions.
Generate 5 unique confession suggestions based on this message:

"${userMessage}"

Respond ONLY with the list, no explanations.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return new Response(JSON.stringify({ suggestions: text }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (err: any) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
}
