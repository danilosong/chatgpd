# Bem-vindo à API de ChatGPT para imagens e perguntas

Este repositório contém uma API para interação com o modelo de linguagem de AI ChatGPT da OpenAI. Através desta API, é possível enviar perguntas ou imagens ao modelo e receber respostas geradas automaticamente.

## Requisitos

- Node.js >= 12.0
- NPM

## Instalação

Clone este repositório para sua máquina usando o comando `git clone https://github.com/danilosong/chatgpt.git`.
Acesse a pasta do projeto com o comando `cd chatgpt`.
Instale as dependências do projeto com o comando `npm install`.

## Uso

Inicie o servidor da API com o seguinte comando:

`sudo node src/init.js`

É necessário adicionar environment com api_token do chatgpt na raiz do projeto como `.env` exemplo:

APIKEY="sk-gUc..."

pino="trace"


A API estará disponível em `http://localhost:3000`.

### Consultas de perguntas

Para realizar uma consulta de perguntas, basta realizar uma requisição POST para a rota `http://localhost:3000/api/chat-txt` com o seguinte corpo:
```JSON
{
    "instruction" : "Instrução para perguntar, para indução de resposta.",
    "prompt": "Sua pergunta aqui"
}
```
Em resposta, você receberá uma resposta do ChatGPT gerada automaticamente pelo modelo, no formato JSON, da seguinte maneira:
```JSON
{
  "resposta": "Não tenho preferência por cores, sou apenas um modelo de linguagem de AI."
}
```
### Geração de imagens

Para realizar a geração de imagens, basta realizar uma requisição POST para a rota `http://localhost:3000/api/chat-img` com o seguinte corpo:
```JSON
{
    "created": "",
    "n"     : 2, //default 2
    "size"  : "1024x1024" //default 1024x1024
}
```
Em resposta, você receberá uma resposta do ChatGPT gerada automaticamente pelo modelo, no formato JSON, da seguinte maneira:
```JSON
{
  "created": "timestamp",
  "url1": "https://example.com/image1.jpg",
  "url2": "https://example.com/image2.jpg"
}
```

Contribuição
Este projeto está aberto a contribuições de todos os interessados. Se você deseja contribuir, basta abrir uma issue ou enviar um pull request.


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](https://platform.openai.com/docs/introduction) para mais detalhes.
