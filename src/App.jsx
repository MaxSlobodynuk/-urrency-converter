import axios from "axios";
import { useEffect, useState } from "react";
import Converter from "./components/Converter/Converter";
import Header from "./components/Header/Header";

const App = () => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/UAH"
        );
        setRates(response.data.rates);
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
      <Converter rates={rates} />
    </div>
  );
};

export default App;
