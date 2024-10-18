import axios from "axios";

export const fetchUSDRates = async () => {
  const response = await axios.get("https://open.er-api.com/v6/latest/USD");
  return response.data.rates.UAH; 
};

export const fetchEURRates = async () => {
  const response = await axios.get("https://open.er-api.com/v6/latest/EUR");
  return response.data.rates.UAH; 
};

export const fetchUAHRates = async () => {
  const response = await axios.get("https://open.er-api.com/v6/latest/UAH");
  return response.data.rates;
};
