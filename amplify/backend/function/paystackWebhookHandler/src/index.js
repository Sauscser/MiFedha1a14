/* Amplify Params - DO NOT EDIT
   ENV
   REGION
   PAYSTACK_SECRET_KEY
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const EXCHANGE_RATE_API = 'https://api.exchangerate-api.com/v4/latest/'; // Free exchange rate API

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    try {
        const body = JSON.parse(event.body);
        const { currency, amount, customer } = body.data;
        const email = customer.email;
        
        let amountInKES = amount / 100; // Default if currency is already KES
        
        if (currency !== 'KES') {
            const exchangeRateResponse = await axios.get(`${EXCHANGE_RATE_API}${currency}`);
            const exchangeRate = exchangeRateResponse.data.rates['KES'];
            
            if (exchangeRate) {
                amountInKES *= exchangeRate;
            } else {
                console.error('Exchange rate for KES not found');
                return { statusCode: 400, body: 'Exchange rate error' };
            }
        }
        
        await updateUserBalance(email, amountInKES);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Payment processed successfully' }),
        };
    } catch (error) {
        console.error('Error processing webhook:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};

async function updateUserBalance(email, amount) {
    console.log(`Updating balance for ${email} by ${amount} KES`);
    // Logic to update user balance in your database
}
