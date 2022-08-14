import React, {useEffect} from 'react';
import Header from "./components/Header";
import {getCurrencies, getCurrency} from "./services/currencies";
import {Currency} from "./interfaces/currency";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: React.FC = () => {
    const [currencies, setCurrencies] = React.useState<Currency[]>([]);

    useEffect(() => {
        getCurrencies().then(setCurrencies);
    }, []);

    return (
        <div className="App">
            <Header title='Currency Converter' currencies={currencies}/>
            <Main currencies={currencies}/>
            <Footer/>
        </div>
    );
}

export default App;
