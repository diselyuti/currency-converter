import React from 'react';
import {Currency, HeaderProps} from "../interfaces/currency";
import CurrencyRate from "./CurrencyRate";


const Header: React.FC<HeaderProps> = ({title, currencies}) => {

    return (
        <header className='header'>
            <h2 className='title'>{title}</h2>
            <article className='currencies'>
                {
                    currencies && currencies.map((currency: Currency) => {
                        return <CurrencyRate key={currency.ccy} currency={currency}/>
                    })
                }
            </article>
        </header>
    );
};

export default Header;