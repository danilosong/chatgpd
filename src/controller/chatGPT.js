const { Configuration, OpenAIApi } = require("openai");
const logger                       = require('../api/pino');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.APIKEY,
});
const openai = new OpenAIApi(configuration);

// const question = 'quantos metros tem a torre eifel?';

const data = {
    model: "text-davinci-003",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
};
const conf = {
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
    },
}
exports.chatGptTxt = async (req, res) => {
    const { prompt } = req.body;

    if(!prompt) return res.status(400).send({ error: 'Prompt is empty' });

    try {
        data.prompt = prompt;
        const response = await openai.createCompletion(data, conf);
        const resul    = { resposta : response.data.choices[0].text.trim() };
        return res.status(200).send(resul);
    } catch (error) {
        if (error.response) {
            logger.error(error.response.status);
            logger.error(error.response.data);
            return res.status(400).send({ error: error.response.data });
        } else {
            logger.error(error.message);
            return res.status(400).send({ error: error.message });
        }
    }
};
exports.chatGptImg = async (req, res) => {
    const { prompt } = req.body;
    let { size, n }  = req.body;

    if(!prompt) return res.status(400).send({ error: 'Prompt is empty' });
    if(!n) n = 2;
    if(!size) size = '1024x1024';

    try {
        const dataImg = {
            prompt : prompt,
            n      : n,
            size   : size
        }
        const response = await openai.createImage(dataImg);
        const resul    = {
            created  : response.data.created,
            url1     : response.data.data[0].url,
            url2     : response.data.data[1].url
        }
        return res.status(200).send(resul);
    } catch (error) {
        if (error.response) {
            logger.error(error.response.status);
            logger.error(error.response.data);
            return res.status(400).send({ error: error.response.data });
        } else {
            logger.error(error.message);
            return res.status(400).send({ error: error.message });
        }
    }
};