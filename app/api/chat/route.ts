import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `
You are a Senior Systems Architect at TEKGUYZ. You are a technical peer, not a corporate bot.
VOICE: Stoic, Literal, Helpful. Plain English. No "marketing fluff," "synergy," or "cutting-edge."
MISSION: Listen to a business owner’s problem and translate it into how a Digital Platform or Smart System can fix it.

IDENTITY:
- We are TEKGUYZ, a South Florida engineering firm.
- We build "Industrial Luxury" digital systems: Portals, Platforms, and Automation.
- We don't "optimize workflows"; we "build systems that handle paperwork automatically so you don't have to."

TONE & STYLE:
- Be direct and honest.
- If you don't know, say so.
- 1-3 sentences max.
- No "bro-talk" or Silicon Valley jargon.
- Use "we" and "our."

KNOWLEDGE BASE:
- Client Portals: Secure data management for clients.
- Automation: Saving 40+ hours/month by automating manual tasks.
- Platforms: Lead-generating, high-performance websites.
- Systems Ledger: 23 live deployments.
- Flagship Builds (Proof of Work):
  1. Crispy Bacon: AI Research Assistant that organizes and summarizes information.
  2. Vericlear: Secure Verification system using ZKP math to verify identity without storing data.
  3. Fancyfam: Private Social Network built for secure family connection.
- Pricing: Custom scoped. Starts at $2k.
- Timeline: 1-2 weeks for platforms, 4-8 weeks for complex systems.

FOLLOW-UP LOGIC:
At the end of every response, you MUST provide 2-3 "Suggested Next Steps" in brackets like this:
[How we work] [See our systems] [Start a project]
Tailor these to the context of the conversation.

CONTEXT AWARENESS:
If the user is on a specific page or asking about a specific service, focus your follow-ups there.
`;

export interface ChatAPIResponse {
  message: string;
  error?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, context } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Invalid or empty messages array" }, { status: 400 });
    }
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[CHAT_API] CRITICAL: GEMINI_API_KEY is missing from environment variables.');
      const res: ChatAPIResponse = { 
        message: "Our AI is temporarily unavailable. The contact form reaches us directly — we respond within 24 hours." 
      };
      return Response.json(res);
    }

    // Append context to instructions
    let finalInstruction = SYSTEM_PROMPT;
    if (context) {
      finalInstruction += `\nCURRENT USER CONTEXT: The user is currently browsing this URL/section: ${context}`;
    }

    // Using the latest @google/genai SDK on the server for security and performance
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: messages.map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      config: {
        systemInstruction: finalInstruction,
        temperature: 0.7,
        maxOutputTokens: 800,
      }
    });

    const text = response.text;
    
    if (!text) {
      console.error('[CHAT_API_ERROR] Empty response from Gemini API. Response object:', JSON.stringify(response));
      throw new Error('Empty response from Gemini API');
    }

    const res: ChatAPIResponse = { message: text };
    return Response.json(res);
  } catch (error: any) {
    // Detailed server-side logging for diagnostics
    console.error('[CHAT_API_ERROR] Operational failure in chat route:', error?.message || error);
    if (error?.stack) console.error(error.stack);
    
    const res: ChatAPIResponse = { 
      message: "Our AI is temporarily unavailable. The contact form reaches us directly — we respond within 24 hours." 
    };
    return Response.json(res, { status: 500 });
  }
}