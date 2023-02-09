# Bem-vindo à API de ChatGPT para imagens e perguntas

Este repositório contém uma API para interação com o modelo de linguagem de AI ChatGPT da OpenAI. Através desta API, é possível enviar perguntas ou imagens ao modelo e receber respostas geradas automaticamente.

## Requisitos

- Node.js >= 12.0
- NPM

## Instalação

Clone este repositório para sua máquina usando o comando git clone https://github.com/SEU-USUARIO/SEU-REPO.git.
Acesse a pasta do projeto com o comando cd SEU-REPO.
Instale as dependências do projeto com o comando npm install.
Inicie o servidor da API com o comando npm start.


## Uso

Inicie o servidor da API com o seguinte comando:

npm start


A API estará disponível em `http://localhost:3000`.

### Consultas de perguntas

Para realizar uma consulta de perguntas, basta realizar uma requisição POST para a rota `http://localhost:3000/api/chat-txt` com o seguinte corpo:

{
    "prompt": "Sua pergunta aqui"
}

Em resposta, você receberá uma resposta do ChatGPT gerada automaticamente pelo modelo, no formato JSON, da seguinte maneira:

{
  "resposta": "Não tenho preferência por cores, sou apenas um modelo de linguagem de AI."
}

### Geração de imagens

Para realizar a geração de imagens, basta realizar uma requisição POST para a rota `http://localhost:3000/api/chat-img` com o seguinte corpo:

{
    "prompt": "Sua descrição aqui",
    "n"     : 2, //default
    "size"  : 1024x1024 //default
}

Contribuição
Este projeto está aberto a contribuições de todos os interessados. Se você deseja contribuir, basta abrir uma issue ou enviar um pull request.


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
