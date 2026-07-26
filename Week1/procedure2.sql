DELIMITER //

CREATE PROCEDURE GetAccountByName(IN acc_name VARCHAR(50))
BEGIN
	SELECT id, account_name, type, balance
    FROM accounts
    WHERE account_name = acc_name;
END //

DELIMITER ;

CALL GetAccountByName('Alice Checking');