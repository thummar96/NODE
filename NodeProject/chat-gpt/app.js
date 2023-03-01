const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  async function start(){
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: "c programm even number 1 to 10",
                temperature: 0,
                max_tokens: 1000,
            });
            console.log(response.data.choices[0].text);

  }
    
start();