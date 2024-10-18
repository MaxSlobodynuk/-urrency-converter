import React, { useState } from "react";
import css from "./Converter.module.css";

const Converter = ({ rates }) => {
  const [amount1, setAmount1] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [amount2, setAmount2] = useState(1);
  const [currency2, setCurrency2] = useState("UAH");

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    return (amount / rates[fromCurrency]) * rates[toCurrency];
  };

  const handleAmount1Change = (e) => {
    const newAmount1 = e.target.value;
    setAmount1(newAmount1);
    setAmount2(convertCurrency(newAmount1, currency1, currency2));
  };

  const handleAmount2Change = (e) => {
    const newAmount2 = e.target.value;
    setAmount2(newAmount2);
    setAmount1(convertCurrency(newAmount2, currency2, currency1));
  };

  const handleCurrency1Change = (e) => {
    const newCurrency1 = e.target.value;
    setCurrency1(newCurrency1);
    setAmount2(convertCurrency(amount1, newCurrency1, currency2));
  };

  const handleCurrency2Change = (e) => {
    const newCurrency2 = e.target.value;
    setCurrency2(newCurrency2);
    setAmount1(convertCurrency(amount2, currency2, newCurrency2));
  };

  return (
    <div className={css.converter}>
      <div className={css.inputGroup}>
        <input type="number" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className={css.inputGroup}>
        <input type="number" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;
