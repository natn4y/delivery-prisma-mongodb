# Define a imagem base
FROM node:16

# Configuração do diretório de trabalho
WORKDIR /app

# Copia os arquivos de código-fonte para o diretório de trabalho
COPY . .

# Define variáveis de ambiente
ENV PORT=3000

# Define o ponto de entrada do contêiner
ENTRYPOINT ["npm", "start"]

# Expõe a porta especificada
EXPOSE $PORT

# Define um rótulo para a imagem
LABEL version="1.0"
LABEL description="Sistema Delivery"