const express = require('express');
const path = require('path');
const dynamodb = require('./config/dynamodb');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'store.html'));
});

app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'support.html'));
});

app.post('/register', async (req, res) => {

    const { name, email, phone } = req.body;

    const params = {
        TableName: 'financetb',
        Item: {
            customerId: uuidv4(),
            name,
            email,
            phone,
            createdAt: new Date().toISOString()
        }
    };

    try {
        await dynamodb.put(params).promise();
        res.send('Customer saved successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Database error');
    }
});

app.get('/health', (req, res) => {
    res.json({
        status: 'UP'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
