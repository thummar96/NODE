const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  async function start(){
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: "c programm in hello word!!",
                temperature: 0,
                max_tokens: 1000,
            });
            console.log(response.data.choices[0].text);

  }
    
start();