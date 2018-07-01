require("babel-polyfill");

import {statement} from './modules/statement';
import {fetchCurrencies} from './modules/db';

statement(0, 'NGN', 0, 'USD');
fetchCurrencies();console.log('k');