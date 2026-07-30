import { useState, useEffect } from "react";

// ---------------------------------------------------------------------------
// 1. TYPES — describe the shape of SecureBank's data (TypeScript, from Wednesday)
// ---------------------------------------------------------------------------
interface Account {
  accountId: number;
  accountNumber: string;
  accountType: "CHECKING" | "SAVINGS";
  balance: number;
}

interface AccountCardProps {
  account: Account;
  onSelect: (accountId: number) => void;
}

// ---------------------------------------------------------------------------
// 2. A PRESENTATIONAL COMPONENT — receives data via props, renders it
// ---------------------------------------------------------------------------
function AccountCard({ account, onSelect }: AccountCardProps) {
  return (
    <div className="account-card" onClick={() => onSelect(account.accountId)}>
      <h3>{account.accountType}</h3>
      <p className="account-number">{account.accountNumber}</p>
      <p className="balance">${account.balance.toFixed(2)}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. A FORM COMPONENT — controlled inputs + validation (today's other topic)
// ---------------------------------------------------------------------------
interface TransferFormProps {
  accounts: Account[];
  onTransfer: (fromId: number, amount: number) => void;
}

function TransferForm({ accounts, onTransfer }: TransferFormProps) {
  const [fromId, setFromId] = useState<number | "">("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const numericAmount = Number(amount);

    if (fromId === "") {
      setError("Choose an account to transfer from.");
      return;
    }
    if (!numericAmount || numericAmount <= 0) {
      setError("Enter an amount greater than $0.");
      return;
    }

    setError("");
    onTransfer(fromId, numericAmount);
    setAmount("");
  }

  return (
    <form className="transfer-form" onSubmit={handleSubmit}>
      <h3>Transfer Funds</h3>

      <label htmlFor="fromAccount">From account</label>
      <select
        id="fromAccount"
        value={fromId}
        onChange={(e) => setFromId(Number(e.target.value))}
      >
        <option value="">Select an account…</option>
        {accounts.map((a) => (
          <option key={a.accountId} value={a.accountId}>
            {a.accountType} — {a.accountNumber}
          </option>
        ))}
      </select>

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Transfer</button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// 4. THE PARENT — holds state, fetches data with useEffect, ties it together
// ---------------------------------------------------------------------------
function mockGetAccounts(): Promise<Account[]> {
  // Stand-in for a real fetch() call — Friday wires this up for real.
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { accountId: 1, accountNumber: "CHK-0001", accountType: "CHECKING", balance: 1500.5 },
          { accountId: 2, accountNumber: "SAV-0002", accountType: "SAVINGS", balance: 4200.0 },
        ]),
      300
    )
  );
}

export default function CustomerDashboard() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Runs once, after the first render — fetches mock account data
  useEffect(() => {
    mockGetAccounts().then(setAccounts);
  }, []);

  function handleTransfer(fromId: number, amount: number) {
    setAccounts((prev) =>
      prev.map((a) =>
        a.accountId === fromId ? { ...a, balance: a.balance - amount } : a
      )
    );
  }

  const totalBalance = accounts.reduce((sum, a) => sum + a.balance, 0);

  return (
    <div className="dashboard">
      <h2>Welcome back</h2>
      <p className="total">Total balance: ${totalBalance.toFixed(2)}</p>

      <div className="account-list">
        {accounts.map((account) => (
          <AccountCard
            key={account.accountId}
            account={account}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      {selectedId && <p>Selected account ID: {selectedId}</p>}

      <TransferForm accounts={accounts} onTransfer={handleTransfer} />
    </div>
  );
}