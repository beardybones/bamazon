DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(80) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(5,2) NOT NULL,
stock_quantity INT(10),
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SSD", "Computers", 99.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sports", 14.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hotwheels", "Toys", 4.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('60" LCD', "Electronics", 499.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Old Spice", "Bathroom", 5.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keyboard", "Computers", 29.99, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Bathroom", 99.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shovel", "Gardening", 19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothing", 9.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lego's Millenium Falcon", "Toys", 699.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Orangeberries", "Produce", .99, 100);

SELECT * FROM products;