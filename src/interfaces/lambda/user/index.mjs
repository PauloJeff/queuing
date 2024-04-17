// index.mjs
import axios from 'axios';
import AWS from 'aws-sdk';

const sns = new AWS.SNS();
const delay = ms => new Promise(res => setTimeout(res, ms));

export const handler = async (event) => {
  // O evento recebido da SQS terá um array 'Records'
  for (const record of event.Records) {
    // A mensagem da SQS estará no campo 'body' do registro
    const messageBody = JSON.parse(record.body);

    try {
      // Simulate delay of 5 seconds
      await delay(5000);
      
      // Enviar uma requisição POST para a API externa localhost
      const response = await axios.post('http://nodejs:3000/api/users', messageBody);

      console.log(`Status: ${response.status}`);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Data:', JSON.stringify(response.data));

      // Se a requisição foi bem-sucedida, envie uma notificação para o SNS
      if (response.status === 200) {
        const params = {
          Message: 'A requisição POST foi bem-sucedida!',
          TopicArn: 'arn:aws:sns:us-east-1:000000000000:user-creation-events'
        };

        await sns.publish(params).promise();
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  return { statusCode: 200 };
};
