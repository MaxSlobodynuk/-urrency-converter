import axios from "axios";
import { useEffect, useState } from "react";
import css from "./Converter.module.css";

const Converter = () => {
  const [rates, setRates] = useState({});
  const [amount1, setAmount1] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [amount2, setAmount2] = useState(0); 
  const [currency2, setCurrency2] = useState("UAH");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/UAH"
        );
        setRates(response.data.rates);
        setAmount2(convertCurrency(1, currency1, currency2)); // Встановлюємо початкове значення для amount2
      } catch (err) {
        setError("Error fetching exchange rates");
      }
    };
    fetchRates();
  }, []);

  // Функція для конвертації
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return 0; // Повертаємо 0, якщо курси не завантажені
    const result = (amount / rates[fromCurrency]) * rates[toCurrency];
    return result.toFixed(2);
  };

  const handleAmount1Change = (e) => {
    const newAmount1 = e.target.value;
    setAmount1(newAmount1);
    setAmount2(convertCurrency(newAmount1, currency1, currency2));
  };

  const handleCurrency1Change = (e) => {
    const newCurrency1 = e.target.value;
    setCurrency1(newCurrency1);
    setAmount2(convertCurrency(amount1, newCurrency1, currency2));
  };

  const handleCurrency2Change = (e) => {
    const newCurrency2 = e.target.value;
    setCurrency2(newCurrency2);
    setAmount2(convertCurrency(amount1, currency1, newCurrency2));
  };

  if (error) {
    return <p>{error}</p>;
  }

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
        <input type="number" value={amount2} disabled />
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
