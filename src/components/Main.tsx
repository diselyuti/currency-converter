import React from 'react';
import {MainProps} from "../interfaces/currency";
import Converter from "./Converter";

const Main: React.FC<MainProps> = ({currencies}) => {
    return (
        <main className='main'>
            <Converter currencies={currencies}/>
        </main>
    );
};

export default Main;