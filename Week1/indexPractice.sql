CREATE INDEX acc_type_balance ON accounts(balance);

SHOW INDEX FROM accounts;

EXPLAIN ANALYZE SELECT * FROM accounts WHERE balance > 1000;

DROP INDEX acc_type_balance ON accounts;

EXPLAIN ANALYZE SELECT * FROM accounts WHERE balance > 1000;

EXPLAIN ANALYZE SELECT * FROM employees WHERE manager_id < 3;

CREATE INDEX manager_index ON employees(manager_id);

EXPLAIN ANALYZE SELECT * FROM employees WHERE manager_id < 3;