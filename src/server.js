import express from 'express';
import cors from 'cors';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    return res.json({ message: 'Backend rodando com sucesso!' });
}); 

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});