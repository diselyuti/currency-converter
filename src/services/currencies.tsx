import {Currency} from "../interfaces/currency";
import {API_URL} from "../consts/api";

export const getCurrencies = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.unshift({
            ccy: 'UAH',
            base_ccy: 'UAH',
            buy: 1,
            sale: 1
        })
        return data;
    }catch (e) {
        console.log(e);
    }
}

export const getCurrency = async (currencyName: string) => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const currency = data.find((currency: Currency) => currency.ccy === currencyName.toUpperCase());
        return currency;
    }catch (e) {
        console.log(e);
    }
}