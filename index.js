import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: "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" // This is also the default, can be omitted
});





const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Give me a plan with resources to learn Java in 10 days in a table format. The table should"}],
  });
  console.log(chatCompletion.choices[0].message);