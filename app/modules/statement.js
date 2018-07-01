const statement = (base_amount, base_currency, result_amount, result_currency) => {
    document.getElementById("statement_base_amount").innerText = base_amount;
    document.getElementById("statement_base_currency").innerText = base_currency;
    document.getElementById("statement_result_amount").innerText = result_amount;
    document.getElementById("statement_result_currency").innerText = result_currency;
}

export {statement};
