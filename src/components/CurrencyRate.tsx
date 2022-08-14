import React from 'react';
import {Currency, CurrencyRateProps} from "../interfaces/currency";


const CurrencyRate: React.FC<CurrencyRateProps> = ({currency}) => {
    return (
        <p className='currency'>
            <span className='currency-name'>{currency.ccy}</span>
            :
            <span className='rate'>{currency.buy}</span>
            /
            <span className='rate'>{currency.sale}</span>
        </p>
    );
};

export default CurrencyRate;