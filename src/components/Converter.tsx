import React, {useEffect, useRef, useState} from 'react';
import {ConverterProps} from "../interfaces/currency";
import CurrencyInput from "./CurrencyInput";

const Converter:React.FC<ConverterProps> = ({currencies}) => {
    const [fromCurrency, setFromCurrency] = useState<string>('UAH');
    const [toCurrency, setToCurrency] = useState<string>('USD');
    const [valueFrom, setValueFrom] = useState<string>('0');
    const [valueTo, setValueTo] = useState<string>('0');
    const [amountInFromCurrency, setAmountInFromCurrency] = useState<boolean>(false);
    const swapCurrenciesImage = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (amountInFromCurrency) {
            if (valueFrom == '') {
                setValueTo('0');
                return;
            }
            const fromCurrencyRate = currencies.find(currency => currency.ccy === fromCurrency)?.sale;
            const toCurrencyRate = currencies.find(currency => currency.ccy === toCurrency)?.buy;
            if (fromCurrencyRate && toCurrencyRate) {
                const valueTo = (parseFloat(valueFrom) * fromCurrencyRate / toCurrencyRate).toFixed(5);
                setValueTo(valueTo);
            }
        } else {
            if (valueTo == '') {
                setValueFrom('0');
                return;
            }
            const fromCurrencyRate = currencies.find(currency => currency.ccy === fromCurrency)?.buy;
            const toCurrencyRate = currencies.find(currency => currency.ccy === toCurrency)?.sale;
            if (fromCurrencyRate && toCurrencyRate) {
                const valueFrom = (parseFloat(valueTo) * toCurrencyRate / fromCurrencyRate).toFixed(5);
                setValueFrom(valueFrom);
            }
        }
    }, [fromCurrency, toCurrency, valueFrom, valueTo]);

    function swapCurrencies() {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
        swapCurrenciesImage.current?.classList.toggle('rotate');
    }

    return (
        <article className='converter'>
            <CurrencyInput
                currencies={currencies}
                currency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                value={valueFrom}
                onChangeValue={(e) => {
                    setAmountInFromCurrency(true);
                    setValueFrom(e.target.value)
                }}
            />
            <img
                src="/images/arrow-down-up.svg"
                alt="swap currencies"
                className="swap-currencies"
                onClick={swapCurrencies}
                ref={swapCurrenciesImage}
            />
            <CurrencyInput
                currencies={currencies}
                currency={toCurrency}
                onChangeCurrency={(e) => setToCurrency(e.target.value)}
                value={valueTo}
                onChangeValue={(e) => {
                    setAmountInFromCurrency(false);
                    setValueTo(e.target.value)
                }}
            />
        </article>
    );
};

export default Converter;