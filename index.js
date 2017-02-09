
function Calculate()
{

var loanTerm = document.getElementById("loanTerm").value;
var interestRate = document.getElementById("interestRate").value;
var loanBalance = document.getElementById("loanBalance").value;
var period = document.getElementById("timePeriod").value;

// monthly interest rate
  monthlyInterestRate = (interestRate / 100) / period;

    // number of payments
  numberOfPayments = loanTerm * period;

    // compounded interest rate
    compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

    // interest quotient
    interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
   monthlyPayment = loanBalance * interestQuotient;
document.getElementById("result").innerHTML = "Monthly Payment: $" + monthlyPayment;
}
