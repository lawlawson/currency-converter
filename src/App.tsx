// import React, { useState } from 'react';

import AmountInput from './components/AmountInput';
import Currencies from './components/Currencies';
import Convert from './components/Convert';

// const CurrencySwitcher = ({ toCurrency, key }) => (
//   <select
//     name='cars'
//     id='cars'
//     onChange={(e) => toCurrency(key, e.target.value)}>
//     <option value='GBP'>GBP</option>
//     <option value='EUR'>EUR</option>
//   </select>
// );

const App = () => {
  // const [currency, setCurrency] = useState({ to: '', from: '', convertedAmount: '' });

  // const updateCurrency = (key, currency) => {
  //   setCurrency({ ...currency, [key]: currency });
  // };

  // const convert = () => {
  //   //fire endpoint api
  // }

  return (
    <div className='container'>
      <h1 className='display-1 text-center'>Currency Converter</h1>
      <AmountInput />
      <br />
      {/* <CurrencySwitcher key={'from'} toCurrency={updateCurrency} />
      <br />
      <br />
      <CurrencySwitcher key={'to'} toCurrency={updateCurrency} />
      <br />
      <button onClick={convert}>Convert</button> */}
      <Currencies />
      <br />
      <Currencies />
      <br />
      <Convert />
    </div>
  );
};

export default App;
