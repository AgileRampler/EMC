import { useState } from "react";

function DataTable({ data }) {
  const [sortKey, setSortKey] = useState("withdrawals");
  const [direction, setDirection] = useState("desc");

  const sortData = (key) => {
    const newDirection =
      sortKey === key && direction === "desc" ? "asc" : "desc";

    setSortKey(key);
    setDirection(newDirection);
  };

  const sorted = [...data].sort((a, b) => {
    if (typeof a[sortKey] === "string") {
      return direction === "asc"
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    }
    return direction === "asc"
      ? a[sortKey] - b[sortKey]
      : b[sortKey] - a[sortKey];
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortData("player")}>Player</th>
          <th onClick={() => sortData("deposits")}>Deposits</th>
          <th onClick={() => sortData("withdrawals")}>Withdrawals</th>
          <th onClick={() => sortData("net")}>Net</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((p, i) => (
          <tr key={i}>
            <td>{p.player}</td>
            <td>{p.deposits.toFixed(2)}</td>
            <td>{p.withdrawals.toFixed(2)}</td>
            <td>{p.net.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
