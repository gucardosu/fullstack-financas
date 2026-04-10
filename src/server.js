import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transactionRoutes.js'

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    return res.json({ message: 'Backend rodando com sucesso!' });
}); 

app.use(transactionRoutes)

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});