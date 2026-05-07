import { useState } from "react";
import StatsGrid from "./compoenents/StatsGrid";
import DataTable from "./compoenents/DataTable";
import Loader from "./compoenents/Loader";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [playerData, setPlayerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const parseCSV = (text) => {
    const lines = text.trim().split("\n");
    const result = [];

    for (let line of lines) {
      const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
      if (matches) {
        result.push(matches.map((m) => m.replace(/^"|"$/g, "").trim()));
      }
    }
    return result;
  };

  const analyzeData = () => {
    if (!input) return alert("Paste transaction data first");

    setLoading(true);

    setTimeout(() => {
      const rows = parseCSV(input);
      const dataRows = rows.slice(1);
      const totals = {};

      for (let row of dataRows) {
        if (row.length < 4) continue;

        const player = row[1];
        const amount = parseFloat(row[3]);

        if (!player || isNaN(amount)) continue;

        if (!totals[player]) {
          totals[player] = { deposits: 0, withdrawals: 0, net: 0 };
        }

        if (amount > 0) {
          totals[player].deposits += amount;
        } else {
          totals[player].withdrawals += Math.abs(amount);
        }

        totals[player].net += amount;
      }

      const formatted = Object.entries(totals).map(([player, data]) => ({
        player,
        ...data,
      }));

      setPlayerData(formatted);
      setLoading(false);
    }, 500);
  };

  const clearData = () => {
    setInput("");
    setPlayerData([]);
  };

  const loadSample = () => {
    setInput(`"Date" "Player" "Reason" "Amount"
"2026-01-30 08:55:06" "Andsytee" "Deposit" "1"
"2026-01-30 06:57:42" "Arcane07" "Withdrawal" "-10"
"2026-01-29 17:17:57" "TFLord" "Deposit" "80"`);
  };

  const filteredData = playerData.filter((p) =>
    p.player.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>TRANSACTION ANALYZER</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste transaction data here..."
      />

      <div className="buttons">
        <button onClick={analyzeData}>Analyze</button>
        <button onClick={clearData}>Clear</button>
        <button onClick={loadSample}>Sample</button>
      </div>

      {loading && <Loader />}

      {playerData.length > 0 && (
        <>
          <StatsGrid data={playerData} />
          <input
            placeholder="Search player..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search"
          />
          <DataTable data={filteredData} />
        </>
      )}
    </div>
  );
}

export default App;
