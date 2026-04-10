// src/controllers/TransactionController.js
import { prisma } from '../database/prisma.js';

export const TransactionController = {
  // Criar transação
  async create(req, res) {
    try {
      const { description, amount, type } = req.body;

      const transaction = await prisma.transaction.create({
        data: { description, amount, type },
      });

      return res.status(201).json(transaction);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar a transação" });
    }
  },

  // Listar transações
  async index(req, res) {
    try {
      const transactions = await prisma.transaction.findMany({
        orderBy: { createdAt: 'desc' },
      });

      return res.json(transactions);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar transações" });
    }
  },

  // Deletar transação
  async delete(req, res) {
    try {
      const { id } = req.params;

      await prisma.transaction.delete({
        where: { id },
      });

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar transação" });
    }
  }
};