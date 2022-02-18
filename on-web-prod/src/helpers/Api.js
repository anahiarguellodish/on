import axios from 'axios';

class Api
{
    post(data)
    {
        const url = "https://9mxgxyv69a.execute-api.us-east-1.amazonaws.com/default/dishonCustomerServiceForm/";
        const key = "GIhBjMj7UZ6Cjnx0TykCV8muvR0JL3nd5fvDXLzG";
        return axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': key
                }
            }
        );
    }
}

export default Api;