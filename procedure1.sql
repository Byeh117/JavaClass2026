DELIMITER $$

CREATE PROCEDURE GetAccountsByType(IN acc_type VARCHAR(20))
BEGIN
	SELECT id, account_name, type, balance
    FROM accounts
    WHERE type = acc_type;
END $$

DELIMITER ;

CALL GetAccountsByType('checking');