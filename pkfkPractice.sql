CREATE TABLE times (
	created_at VARCHAR(50) PRIMARY KEY,
    amount DECIMAL(10, 2)
);

CREATE TABLE ordered (
	order_id INT PRIMARY KEY,
    order_date DATE,
    order_created VARCHAR(50),
    CONSTRAINT fk_order_created
    FOREIGN KEY (order_created) REFERENCES times(created_at)
);