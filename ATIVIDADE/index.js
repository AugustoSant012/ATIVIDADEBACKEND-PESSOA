const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./database/connection');
const pessoaRoutes = require('./routes/pessoaRoutes');

const PORT = process.env.PORT || 7777;

connectDB();

app.use(express.json());
app.use('/api', pessoaRoutes);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
