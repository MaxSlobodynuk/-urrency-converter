import css from "./Header.module.css";

const Header = ({ rates }) => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Currency Converter</h1>
      <p className={css.paragraph}>USD/UAH: {rates["USD"]}</p>
      <p className={css.paragraph}>EUR/UAH: {rates["EUR"]}</p>
    </header>
  );
};

export default Header;
