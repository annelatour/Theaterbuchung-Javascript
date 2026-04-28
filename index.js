const { statement } = require("./statement")
const plays = require("./play.json")
const invoices = require("./invoices.json")

console.log(statement(invoices[0], plays));