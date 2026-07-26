
INSERT INTO accounts (id, account_name, type, balance)
VALUES
(5, 'Gerald Checking', 'Checking', 500.00);

SELECT * FROM accounts WHERE id = 5;

BEGIN;
UPDATE accounts
SET balance = balance + 5500.00
WHERE id = 5;
COMMIT;

SELECT * FROM accounts WHERE id = 5;

ALTER TABLE accounts
ADD COLUMN is_active BOOLEAN DEFAULT TRUE;

UPDATE accounts
SET is_active = FALSE
WHERE id = 5;

SELECT * FROM accounts WHERE is_active = TRUE;

SELECT * FROM accounts;