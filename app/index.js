import {
    statement
} from './modules/statement';
import {
    currencies,
    fetchCurrencies
} from './modules/db';

statement(0, 'NGN', 0, 'USD');

let selA = document.getElementById("activity_base_currency");
let selB = document.getElementById("activity_result_currency");
fetchCurrencies().then(data => {
    let currencyObj = data.results;

    Object.values(currencyObj).map((currency) => {
        let optA = document.createElement("option");
        optA.value = currency.id;
        optA.innerHTML = currency.currencyName;
        selA.appendChild(optA);

        let optB = document.createElement("option");
        optB.value = currency.id;
        optB.innerHTML = currency.currencyName;
        selB.appendChild(optB);
    });
});

const update = () => {
    let base_amount = document.getElementById("activity_base_amount").value;
    let base_currency = document.getElementById("activity_base_currency").value;
    let result_amount = document.getElementById("activity_result_amount").value;
    let result_currency = document.getElementById("activity_result_currency").value;

    if(base_currency != result_currency) {
        console.log(base_amount, base_currency, result_amount, result_currency);
        
    }
}

document.getElementById("activity_base_amount").addEventListener("change", update);
document.getElementById("activity_base_currency").addEventListener("change", update);
document.getElementById("activity_result_amount").addEventListener("change", update);
document.getElementById("activity_result_currency").addEventListener("change", update);