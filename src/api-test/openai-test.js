const OpenAI = require("openai");
let apikey = "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";

const openai = new OpenAI({
  apiKey: apikey,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });
}

main();
