// hooks/getEmbeddings.js
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';

let model = null;

export default async function getEmbeddings(text) {
  await tf.setBackend('cpu');

  if (!model) {
    model = await use.load();
  }

  const embeddings = await model.embed([text]);
  return embeddings.arraySync()[0]; // Return the first (and only) embedding vector
}
