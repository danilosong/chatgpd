const express           = require('express');
const router            = express.Router();
const chatGPTController = require('../controller/chatGPT');

router.post('/chat-txt', chatGPTController.chatGptTxt);
router.post('/chat-img', chatGPTController.chatGptImg);
router.post('/chat-test', chatGPTController.chatGptTest);

module.exports = router;