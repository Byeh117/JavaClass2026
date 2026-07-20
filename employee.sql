CREATE TABLE employees (
	employee_id INT PRIMARY KEY,
	employee_name VARCHAR(50),
    manager_id INT
);

INSERT INTO employees VALUES
(1, 'Sarah', NULL),
(2, 'Matt', 1),
(3, 'Veronica', 1),
(4, 'Charlie', 2),
(5, 'Brian', 2);