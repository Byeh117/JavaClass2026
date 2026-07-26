CREATE TABLE IF NOT EXISTS customers (
	customer_id INT,
    customer_name VARCHAR(50),
    PRIMARY KEY (customer_id)
);

CREATE TABLE orders (
	order_id INT PRIMARY KEY,
    amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'Diana');

INSERT INTO orders VALUES
(101, 1, 250.00),
(102, 1, 100.00),
(103, 2, 75.50),
(104, 5, 300.00);