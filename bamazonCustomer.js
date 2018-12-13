var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
});
showUpdatedTable();
function showUpdatedTable() {
    connection.query(
    "SELECT * FROM products", function (err, table) {
        if (err) throw err;
        console.table(table);
        start();
    }
)
}
function start() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_ID",
            message: "What is the item ID of the product you would like to buy?"
        },
        {
            type: "input",
            name: "howMany",
            message: "How many would you like to buy?"
        }


    ]).then(function (response) {
        connection.query(
            "SELECT * FROM products WHERE ?",
            [{
                item_ID: response.item_ID
            }],
            function (err,data) {
                if (err) throw err;
                if (data[0].stock_quantity >= response.howMany) {
                    // decrement stock quantity
                    data[0].stock_quantity -= response.howMany
                    // multiply response.howMany by price
                    var total = response.howMany * data[0].price;
                    console.log("Your order is complete! Your total cost is: $" + total);
                    // console.table(table);
                    showUpdatedTable();
                } else (console.log("Insufficient quantity!"),start())
                
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [{
                        stock_quantity: data[0].stock_quantity
                    },
                    {
                        item_ID: response.item_ID
                    }
                ]
                )
                connection.end();
            }
        )

    }
    );

}
// connection.end();