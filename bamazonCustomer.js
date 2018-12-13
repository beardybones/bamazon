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

connection.query(
    "SELECT * FROM products", function (err, data) {
        if (err) throw err;
        console.table(data);
        start();
    }
)
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
                item_ID: response.item_id
            }],
            function (err,data) {
                if (err) throw err;
                console.log(data);
            }
        )
    }
    );

}