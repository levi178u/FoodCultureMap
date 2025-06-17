import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateNarrativeFromRAG(query, docs) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const context = docs.map((doc, i) =>
    `Food ${i + 1}:
Name: ${doc.foodName}
Region: ${doc.region}
Country: ${doc.country}
Time Origin: ${doc.timeOrigin}
Description: ${doc.description}
Cultural Significance: ${doc.culturalSignificance}
Ingredients: ${doc.ingredients.join(', ')}`).join("\n\n");

  const prompt = `
You are a food historian and storyteller. A user is curious about the history and cultural evolution of food, and asked the question:

"${query}"

Based on the following food history documents:

${context}

Write a compelling, historically accurate narrative that traces the evolution of these foods through time and geography. Return a **JSON array** with 5 objects. Each object should have:
- "title": short title with food name and time period,
- "story": a short story (~50 words).
Wrap the entire JSON in a Markdown-style \`\`\`json block.
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Step 1: Strip the ```json and ``` parts
    const cleaned = text.replace(/```json|```/g, '').trim();

    // Step 2: Parse it to JS
    const parsed = JSON.parse(cleaned);

    console.log(parsed); // You’ll now get the array of objects
    return parsed;

  } catch (err) {
    console.error('Failed to generate narrative:', err);
    return [];
  }
}