import './TransactionList.css';

export function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list">
      <h2>Suas Transações</h2>
      
      {transactions.length === 0 ? (
        <p className="empty-message">Nenhuma transação cadastrada ainda. Adicione uma acima!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                {/* Muda a cor dependendo se é entrada ou saída */}
                <td className={transaction.type === 'entrada' ? 'text-green' : 'text-red'}>
                  {transaction.type === 'entrada' ? '+ ' : '- '} 
                  R$ {transaction.amount.toFixed(2)}
                </td>
                <td className="capitalize">{transaction.type}</td>
                <td>
                  <button 
                    className="btn-delete" 
                    onClick={() => onDelete(transaction.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}