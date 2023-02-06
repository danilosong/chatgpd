const { Configuration, OpenAIApi } = require("openai");
const logger                       = require('./api/pino');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.APIKEY,
});
const openai = new OpenAIApi(configuration);

const question = '';

const data = {
    model: "text-davinci-003",
    prompt: question,
    temperature: 0,
    max_tokens: 7,
};
const conf = {
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
}

const start = async () => {
    try {
        const response = await openai.createCompletion(data, conf);
        console.log(`pergunta : ${question}`);
        console.log(`Resposta : ${response.data.choices[0].text.trim()}`);
    } catch (error) {
        if (error.response) {
            logger.error(error.response.status);
            logger.error(error.response.data);
        } else {
            logger.error(error.message);
        }
    }
    
}
start();

