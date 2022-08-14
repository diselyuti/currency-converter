import React, {useEffect} from 'react';
import {CurrencyInputProps} from "../interfaces/currency";

const CurrencyInput:React.FC<CurrencyInputProps> = (
    {
        currencies,
        currency,
        onChangeCurrency,
        value,
        onChangeValue,
    }) => {

    return (
        <>
            {
                currencies ? (
                    <div className='currency-input'>
                        <input
                            type='number'
                            value={value}
                            onChange={onChangeValue}
                            className='input-currency'
                        />
                        <select
                            value={currency}
                            onChange={onChangeCurrency}
                            className='select-currency'
                        >
                            {
                                currencies.map(currency =>
                                    <option
                                        key={currency.ccy}
                                        value={currency.ccy}
                                    >
                                        {currency.ccy}
                                    </option>)
                            }
                        </select>
                    </div>
                    )
                    :
                    <div>Loading...</div>
            }

        </>
    );
};

export default CurrencyInput;