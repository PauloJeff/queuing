# Queuing

Este projeto consiste em uma aplicação de enfileiramento e processamento de mensagens simples.

## Começando
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos
O que você precisa para instalar o software e como instalá-lo.
```bash
Docker
Docker  Compose
AWS  CLI
```
Configurar profile no aws cli para localstack, o profile não necessariamente precisa ter access keys ou secret keys reais, podem ser usados dados fake.

```bash
aws configure --profile localstack

#O AWS CLI vai solicitar as informações abaixo.
AWS Access Key ID [None]: jhon
AWS Secret Access Key [None]: doe
Default region name [None]: us-east-1
Default output format [None]: json
```
### Instalação

Siga os passos abaixo para baixar e configurar o ambiente local.

```bash
# Clone este repositório
git clone https://github.com/PauloJeff/queuing.git

# Vá para a pasta do projeto
cd projectname

#Renomear .env-example para .env
mv .env-example  .env

# Instale as dependências
npm install
```
## Executando os testes
Os testes unitários foram feitos com jest e precisam atingir mais de 80% de cobertura.

```bash
npm run coverage
```
## Executando o projeto

O projeto possui um script de inicialização rápida, basta executá-lo e todos os passos serão feitos para iniciar o projeto.

```bash
#Na pasta raiz do projeto, execute o comando abaixo
./start.sh
```

Caso queira executar os passos manualmente, segue comando abaixo.
```bash
#Executar o projeto
docker compose up  -d

#Criar tópico SNS
aws --endpoint-url=http://localhost:4566 --profile localstack sns create-topic --name user-creation-events --output table | cat

#A partir da raiz do projeto, ir até a pasta do projeto lambda
cd src/interfaces/lambda/user

#Instalar todos os pacotes necessários
npm install

#Zipar o conteúdo da pasta
zip -r function.zip ./

#Criar lambda function
aws --endpoint-url=http://localhost:4566 --profile localstack lambda create-function --function-name localstack-lambda-user-sqs-trigger  --runtime nodejs20.x --role arn:aws:iam::000000000000:role/user-lambda-noop-role --handler  index.handler --zip-file  fileb://function.zip  --timeout 120

#Criar fila do sqs
aws --endpoint-url=http://localhost:4566 --profile localstack sqs create-queue --queue-name UserQueue

#Criar trigger do SNS com a lambda function
aws --endpoint-url=http://localhost:4566 --profile localstack lambda create-event-source-mapping --function-name  localstack-lambda-user-sqs-trigger --batch-size 10 --event-source-arn arn:aws:sqs:us-east-1:000000000000:UserQueue

#Enviar mensagem
aws --endpoint-url=http://localhost:4566 --profile localstack sqs send-message --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/UserQueue --message-body '{"name":"Jhon Doe","email":"jhon_doe@email.com","age":"45"}'
```

Para enviar uma mensagem para o SQS, utilize o comando de exemplo abaixo.

```bash
aws --endpoint-url=http://localhost:4566 --profile localstack sqs send-message --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/UserQueue --message-body '{"name":"Jhon Doe","email":"jhon_doe@email.com","age":"45"}'
````

## API
Essa aplicação possui uma api REST que permite gerenciar as informações processadas pela fila do AWS SQS.

[Documentação da API](https://documenter.getpostman.com/view/32699685/2sA3BkcspY)

## Construído com

* Node.js - O runtime de JavaScript usado
* Express - O framework web usado
* Jest - Framework de teste usado

## Autores

*  **Paulo Jefferson Mendes Oliveira** - *Criador e executor do projeto* - PauloJeff