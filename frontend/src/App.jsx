import { useState, useEffect } from 'react';
import './App.css';
import { TransactionForm } from './components/TransactionForm/TransactionForm';
import { TransactionList } from './components/TransactionList/TransactionList';
import { Sumary } from './components/Sumary/Sumary'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
      }
    };

    loadTransactions();
  }, [refreshTrigger]);

  const handleTransactionAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await fetch(`http://localhost:3333/transactions/${id}`, {
        method: 'DELETE',
      });
      setRefreshTrigger(prev => prev + 1);
    } catch (error) {
      console.error("Erro ao deletar transação:", error);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>💰 Finanças OS</h1>
      </header>

      <main className="content">
        <Sumary transactions={transactions} />
        <TransactionForm onTransactionAdded={handleTransactionAdded} />
        
        <TransactionList 
          transactions={transactions} 
          onDelete={handleDeleteTransaction} 
        />
      </main>
    </div>
  )
}

export default App;