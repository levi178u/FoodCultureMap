import  { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateResponse(query, docs) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const context = docs.map(doc => `Dish: ${doc.name}\nDesc: ${doc.description}`).join('\n\n');

  const prompt = `Using the information below, answer this question:\n${query}\n\n---\n${context}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}


export  { generateResponse }