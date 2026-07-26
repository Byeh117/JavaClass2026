DROP VIEW account_summary;

CREATE VIEW account_summary AS 
SELECT
	a.id,
    c.customer_id,
    a.account_name,
    a.type
FROM accounts a
JOIN customers c ON a.id = c.customer_id;

SELECT * FROM account_summary;