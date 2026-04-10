import { useState } from 'react';
import './TransactionForm.css';

export function TransactionForm({ onTransactionAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('entrada');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type,
    };

    try {
      await fetch('http://localhost:3333/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      setDescription('');
      setAmount('');

      if (onTransactionAdded) {
        onTransactionAdded();
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao salvar a transação. O back-end está rodando?");
    }
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Descrição</label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Ex: Salário da KellTech" 
          required 
        />
      </div>

      <div className="form-row">
        <div className="input-group">
          <label>Valor (R$)</label>
          <input 
            type="number" 
            step="0.01" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Ex: 850.00" 
            required 
          />
        </div>

        <div className="input-group">
          <label>Tipo</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn-submit">Adicionar Transação</button>
    </form>
  );
}