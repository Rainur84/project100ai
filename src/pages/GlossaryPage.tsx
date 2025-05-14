import { useState } from 'react';

type Term = {
  term: string;
  short: string;
  full: string;
};

const terms: Term[] = [
  {
    term: 'LLM (Large Language Model)',
    short: 'AI model trained on vast text data to understand and generate human language.',
    full: 'LLMs are large-scale deep learning models (e.g., GPT-4, Claude) trained on massive datasets. They can perform tasks like writing, summarizing, answering questions, translating, and more. Based on transformer architecture.',
  },
  {
    term: 'Prompt',
    short: 'Input text that tells an AI what to do.',
    full: 'A prompt is the instruction or context given to an AI model to generate a specific output. Crafting good prompts is essential for getting accurate or creative results.',
  },
  {
    term: 'Prompt Engineering',
    short: 'Art of designing effective AI prompts.',
    full: 'Prompt engineering is the practice of writing and refining prompts to achieve optimal results from AI models. This includes using instructions, examples, or formatting to guide model behavior.',
  },
  {
    term: 'Fine-tuning',
    short: 'Training a pre-trained model on a specific dataset.',
    full: 'Fine-tuning involves continuing the training of a pre-trained model using a domain-specific dataset to adapt it to particular tasks or industries.',
  },
  {
    term: 'Inference',
    short: 'The process of generating output from an AI model.',
    full: 'Inference refers to the stage where a trained model is used to make predictions or generate outputs (e.g., text, images) from new input data.',
  },
  {
    term: 'Zero-shot Learning',
    short: 'Performing a task without specific examples.',
    full: 'Zero-shot learning enables a model to handle new tasks without additional training examples, relying on general knowledge and instructions in the prompt.',
  },
  {
    term: 'Few-shot Learning',
    short: 'Learning from a small number of examples.',
    full: 'Few-shot learning allows AI models to generalize from a few labeled examples provided within the prompt to complete tasks like classification, summarization, or generation.',
  },
  {
    term: 'Embedding',
    short: 'Vector representation of text or data.',
    full: 'Embeddings convert words, sentences, or documents into high-dimensional vectors that capture semantic meaning. Used in search, clustering, recommendations, and more.',
  },
  {
    term: 'Transformer',
    short: 'A neural network architecture used in modern AI.',
    full: 'The transformer architecture, introduced by Google in 2017, powers most LLMs. It uses self-attention to process and understand sequences, allowing parallelization and scalability.',
  },
  {
    term: 'Token',
    short: 'A chunk of text processed by an LLM.',
    full: 'Tokens are pieces of text (words or subwords) used during model input/output. Models like GPT have token limits (e.g., 8k, 32k). One token is about ¾ of a word.',
  },
  {
    term: 'Hallucination',
    short: 'When AI outputs incorrect or made-up info.',
    full: 'Hallucination refers to confident but factually incorrect outputs from an AI. It’s a known challenge with LLMs and can occur even with good prompts.',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    short: 'Combining AI with external search or databases.',
    full: 'RAG allows an AI model to access external data (e.g., via search or vector database) during generation. It improves accuracy by grounding responses in real-time data.',
  },
  {
    term: 'Chain of Thought (CoT)',
    short: 'Prompting method where the AI explains reasoning.',
    full: 'Chain-of-Thought prompting guides the model to reason step-by-step, improving performance in math, logic, and complex decision-making tasks.',
  },
  {
    term: 'Agent',
    short: 'AI system that autonomously performs tasks.',
    full: 'Agents use tools, memory, and decision-making to complete complex goals (e.g., research, coding). Examples include AutoGPT, BabyAGI, and LangChain agents.',
  },
  {
    term: 'Context Window',
    short: 'Amount of input/output tokens an LLM can handle.',
    full: 'The context window limits how much data an LLM can "remember" at once. GPT-4 has versions with 8K or 32K token windows. Newer models like Claude 3 have >100K windows.',
  },
  {
    term: 'Multimodal AI',
    short: 'AI that understands multiple data types (text, image, etc).',
    full: 'Multimodal models can process and generate text, images, audio, or video. DALL·E, Gemini, and Sora are examples. These systems can answer questions about images or describe videos.',
  },
  {
    term: 'Overfitting',
    short: 'Model learns training data too well, performs poorly on new data.',
    full: 'Overfitting happens when a model memorizes the training data instead of generalizing. This leads to poor performance on unseen input.',
  },
  {
    term: 'Underfitting',
    short: 'Model is too simple to learn patterns in data.',
    full: 'Underfitting occurs when the model fails to capture the underlying structure in the training data, resulting in poor performance both during training and inference.',
  },
  {
    term: 'Training Data',
    short: 'Data used to teach AI models.',
    full: 'Training data consists of texts, images, or other information used to build AI models. The quality, diversity, and size of this data greatly affect model performance.',
  },
  {
    term: 'Latent Space',
    short: 'Abstract representation of features in a model.',
    full: 'Latent space is the internal learned representation of data, allowing models to organize concepts (e.g., emotions, topics) in multi-dimensional space for reasoning and generation.',
  },
  {
    term: 'Diffusion Model',
    short: 'AI that generates images step-by-step.',
    full: 'Diffusion models (like Stable Diffusion, Midjourney) start from random noise and iteratively denoise to generate realistic images guided by text prompts.',
  },
  {
    term: 'Text-to-Image',
    short: 'AI generating images from a text description.',
    full: 'Text-to-image models take written prompts (e.g., "cat wearing sunglasses") and generate images using models like DALL·E, Midjourney, or Stable Diffusion.',
  },
  {
    term: 'Text-to-Speech (TTS)',
    short: 'AI voice generation from written text.',
    full: 'TTS systems convert text into natural-sounding speech. They are used in voice assistants, audiobooks, and accessibility tools (e.g., ElevenLabs, PlayHT).',
  },
  {
    term: 'Speech-to-Text (STT)',
    short: 'Transcribing spoken audio to text.',
    full: 'Speech-to-Text models convert human speech into written language. Popular examples include Whisper by OpenAI and Google’s STT APIs.',
  },
  {
    term: 'API (Application Programming Interface)',
    short: 'Interface for accessing AI model functionality.',
    full: 'APIs allow developers to integrate AI features into apps by sending input and receiving output. OpenAI, Anthropic, and others provide APIs for chat, image generation, and more.',
  },
];

export default function GlossaryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">AI Glossary</h1>
      <div className="space-y-4">
        {terms.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 hover:bg-gray-50 transition flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.term}</h2>
                <p className="text-sm text-gray-600">{item.short}</p>
              </div>
              <span className="text-2xl text-gray-400">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-800 border-t border-gray-100">
                {item.full}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}