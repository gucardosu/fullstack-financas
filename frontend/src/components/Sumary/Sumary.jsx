import './Sumary.css'

export function Sumary({ transactions }) {
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'entrada') {
        acc.entradas += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.saidas += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { entradas: 0, saidas: 0, total: 0 }
  );

  return (
    <div className="summary-container">
      <div className="summary-card">
        <header>
          <span>Entradas</span>
        </header>
        <strong className="text-green">R$ {summary.entradas.toFixed(2)}</strong>
      </div>

      <div className="summary-card">
        <header>
          <span>Saídas</span>
        </header>
        <strong className="text-red">R$ {summary.saidas.toFixed(2)}</strong>
      </div>

      <div className={`summary-card ${summary.total < 0 ? 'bg-red' : 'bg-green'}`}>
        <header>
          <span>Total</span>
        </header>
        <strong>R$ {summary.total.toFixed(2)}</strong>
      </div>
    </div>
  );
}