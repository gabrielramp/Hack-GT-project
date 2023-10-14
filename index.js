import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: "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" // This is also the default, can be omitted
});

var numDays = 10;
var prompt = "Give me a plan with resources to learn Java in 10 days in a table format. The table should have four columns. The first column should include the day number (say Day # in each row), the second column should include the topic, the third column should include resources with specific links and titles, and the fourth column should include the tasks. The first column should only include the number of the day. The second column should only include the topic to be learned. The third column should only include recommended resources to learn that topic. The fourth column should only include the tasks that should be taken to learn the corresponding topic for each day. Please surround strings with double quotes. Set the temperature setting to 0.1.";

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": prompt}],
  });

  var output = chatCompletion.choices[0].message["content"];
  var separatedOutput = output.split("Day ");
//   separatedOutput.pop()
//   separatedOutput.pop()

for (let i = 0; i < separatedOutput.length; i++) {
  let result = separatedOutput[i].split("|");
  separatedOutput[i] = result;
}

console.log(separatedOutput);
console.log(separatedOutput.length);
