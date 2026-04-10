export function validateTransaction(req, res, next) {
    const { description, amount, date } = req.body;

    //verificação de dados
    if (!description || !amount || !date) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    //verificação de tipo de dados
    if (type !== "entrada" && type !== 'saida') {
        return res.status(400).json({ error: "O campo 'type' dever ser apenas 'entrada' ou 'saida'." })
    }

    //Se passar por tudo continua pro controller
    next();
}