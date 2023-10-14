import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: API_KEY // This is also the default, can be omitted
});



const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Give me a plan with resources to learn Java in 10 days in a table format. The table should have four columns. The first column should include the day number, the second column should include the topic, the third column should include resources with specific links and titles, and the fourth column should include the tasks. The first column should only include the number of the day. The second column should only include the topic to be learned. The third column should only include recommended resources to learn that topic. The fourth column should only include the tasks that should be taken to learn the corresponding topic for each day. Give me the table in 2d array code in javaScript. Please surround strings with double quotes. Please make sure to add links to resources. Give me the table in 2d array code in javaScript. Give me the table in 2d array code in javaScript."}],
  });
  console.log(chatCompletion.choices[0].message);