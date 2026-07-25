SELECT * FROM accounts;

SELECT * FROM customers;

SELECT account_name FROM accounts
WHERE balance < (
SELECT AVG(balance) FROM accounts);

SELECT type, account_name, balance,
	RANK () OVER (
		PARTITION BY type
        ORDER BY balance DESC
	) AS rnk
FROM accounts;

SELECT type, COUNT(*) AS count, SUM(balance) AS total_balance
FROM accounts
GROUP BY type;