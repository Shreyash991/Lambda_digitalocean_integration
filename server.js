const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/say', async (req, res) => {
    const keyword = req.query.keyword;
    try {
        const response = await axios.get(`https://8h2l3815o2.execute-api.us-east-2.amazonaws.com/say?keyword=${keyword}`);
        res.send(response.data.message);
    } catch (error) {
        res.status(500).send('Error calling Lambda function');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

