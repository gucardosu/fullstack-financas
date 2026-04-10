// src/routes/transactionRoutes.js
import { Router } from 'express';
import { TransactionController } from '../controllers/TransactionController.js';
import { validateTransaction } from '../middlewares/validateTransaction.js';

const router = Router();

// Rota POST passando pelo middleware de validação antes de chegar no controller
router.post('/transactions', validateTransaction, TransactionController.create);

router.get('/transactions', TransactionController.index);
router.delete('/transactions/:id', TransactionController.delete);

export default router;