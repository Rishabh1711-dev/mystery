export const runtime = 'nodejs';

export async function POST() {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `
Generate EXACTLY 3 safe, friendly, open-ended questions
for a general anonymous discussion board.

Rules:
- Each question must be a complete sentence
- Separate questions using ONLY "||"
- No numbering
- No sensitive or adult topics

Format:
Question one || Question two || Question three
                  `,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 200,
          },
        }),
      }
    );

    const data = await res.json();

    console.log('Gemini raw response:', JSON.stringify(data, null, 2));

    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: any) => p.text)
        .join('')
        .trim() || '';

    if (!text) {
      return Response.json({
        suggestions:
          'What is something that made you smile today? || What is a goal you are quietly working toward? || What is a habit you want to build this year?',
      });
    }

    return Response.json({ suggestions: text });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: 'Gemini failed' },
      { status: 500 }
    );
  }
}
