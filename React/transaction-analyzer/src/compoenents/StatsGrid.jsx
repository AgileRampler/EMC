function StatsGrid({ data }) {
  const totalDeposits = data.reduce((sum, p) => sum + p.deposits, 0);
  const totalWithdrawals = data.reduce((sum, p) => sum + p.withdrawals, 0);
  const net = totalDeposits - totalWithdrawals;

  return (
    <div className="stats">
      <div>Deposits: {totalDeposits.toFixed(2)}</div>
      <div>Withdrawals: {totalWithdrawals.toFixed(2)}</div>
      <div>Net: {net.toFixed(2)}</div>
      <div>Players: {data.length}</div>
    </div>
  );
}

export default StatsGrid;
