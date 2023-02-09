const express       = require('express');
const bodyParser    = require('body-parser');
const chatGPTRoutes = require('./routes/routes');

const app = express();

// Configura o middleware body-parser para extrair o corpo da requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', chatGPTRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});