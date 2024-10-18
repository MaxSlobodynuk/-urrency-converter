import { useEffect, useState } from "react";
import { fetchUSDRates, fetchEURRates, fetchUAHRates } from "./api";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";

const App = () => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const usdRate = await fetchUSDRates();
        const eurRate = await fetchEURRates();
        setRates({ USD: usdRate, EUR: eurRate });
      } catch (err) {
        setError("Error fetching exchange rates");
      }
    };
    fetchRates();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Header rates={rates} />
      <Converter />
    </div>
  );
};

export default App;
