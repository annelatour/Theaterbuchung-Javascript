const { statement } = require("./statement")
const plays = require("./plays.json")
const invoices = require("./invoices.json")

invoices.forEach(invoice => {
    console.log(statement(invoice, plays));
});