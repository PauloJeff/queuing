#!/bin/bash

#Executar o projeto
docker compose up -d

#Sleep para aguardar subida dos serviços
sleep 3

#Criar tópico SNS
aws --endpoint-url=http://localhost:4566 --profile localstack sns create-topic --name user-creation-events --output table | cat

#Criar fila para subscription do SNS
aws --endpoint-url=http://localhost:4566 --profile localstack sqs create-queue --queue-name SnsQueue

#Criar subscriber para fila do SNS
aws --endpoint-url=http://localhost:4566 --profile localstack sns subscribe --topic-arn arn:aws:sns:us-east-1:000000000000:user-creation-events --protocol sqs --notification-endpoint arn:aws:sqs:us-east-1:000000000000:SnsQueue --output table | cat

#A partir da raiz do projeto, ir até a pasta do projeto lambda
cd src/interfaces/lambda/user

#Instalar todos os pacotes necessários
npm install

#Zipar o conteúdo da pasta
zip -r function.zip ./

#Criar lambda function
aws --endpoint-url=http://localhost:4566 --profile localstack lambda create-function --function-name localstack-lambda-user-sqs-trigger --runtime nodejs20.x --role arn:aws:iam::000000000000:role/user-lambda-noop-role --handler index.handler --zip-file fileb://function.zip --timeout 120

#Sleep para aguardar subida do lambda
sleep 5

#Criar fila do sqs
aws --endpoint-url=http://localhost:4566 --profile localstack sqs create-queue --queue-name UserQueue

#Criar trigger do SNS com a lambda function
aws --endpoint-url=http://localhost:4566 --profile localstack lambda create-event-source-mapping --function-name localstack-lambda-user-sqs-trigger --batch-size 10 --event-source-arn arn:aws:sqs:us-east-1:000000000000:UserQueue

#Enviar mensagem
aws --endpoint-url=http://localhost:4566 --profile localstack sqs send-message --queue-url http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/UserQueue --message-body '{"name":"Jhon Doe","email":"jhon_doe@email.com","age":"45"}'