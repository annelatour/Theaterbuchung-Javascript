module.exports = {
    playCalculation,
}

function playCalculation (play, perf) {
    switch (play.type) {
        case "tragedy":
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
            }
            thisAmount += 30000 * perf.audience;
            break;
        case "musical":
            thisAmount = 50000;
            if (perf.audience > 50) {
                thisAmount += (perf.audience - 50) * 500;
            }
            break;
        case "oper":
            thisAmount = 100000;
            if (perf.audience > 50) {
                thisAmount += 50000;
            }
            if (perf.audience > 100) {
                thisAmount += 50000;
            }
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
    return thisAmount;
}