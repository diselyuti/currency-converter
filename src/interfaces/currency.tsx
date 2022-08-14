export interface Currency{
    ccy: string;
    base_ccy: string;
    buy: number;
    sale: number;
}

export interface HeaderProps {
    title: string;
    currencies: Currency[];
}

export interface MainProps {
    currencies: Currency[];
}

export interface ConverterProps {
    currencies: Currency[];
}

export interface CurrencyInputProps {
    currencies: Currency[];
    currency: string;
    value: string;
    onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CurrencyRateProps {
    currency: Currency;
}