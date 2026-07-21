CREATE TABLE accounts (
	id INT PRIMARY KEY,
    account_name VARCHAR(50),
    type VARCHAR(50) NOT NULL,
    balance DECIMAL(10, 2)
);

INSERT INTO accounts VALUES
(1, 'Alice Checking', 'checking', 1500.00),
(2, 'Alice Savings', 'savings', 5000.00),
(3, 'Bob Checking', 'checking', 800.50),
(4, 'Bob Savings', 'savings', 32000.00);

SELECT type, COUNT(*) AS num_accounts, SUM(balance) AS total_balance
FROM accounts
GROUP BY type;