SELECT * FROM customers;

SELECT customer_name FROM customers
WHERE customer_id IN (
	SELECT id FROM accounts
);

SELECT * FROM (
SELECT id, COUNT(id) AS n
FROM accounts GROUP BY id) AS acc_counts
WHERE n > 0;

SELECT balance FROM accounts
WHERE balance > (
SELECT AVG(balance) FROM accounts);