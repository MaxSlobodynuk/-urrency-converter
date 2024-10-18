import css from "./Header.module.css";

const Header = ({ rates }) => {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Currency Converter</h1>
      {rates["USD"] ? (
        <p className={css.paragraph}>USD/UAH: {rates["USD"].toFixed(2)}</p>
      ) : (
        <p className={css.paragraph}>Loading USD rate...</p>
      )}
      {rates["EUR"] ? (
        <p className={css.paragraph}>EUR/UAH: {rates["EUR"].toFixed(2)}</p>
      ) : (
        <p className={css.paragraph}>Loading EUR rate...</p>
      )}
    </header>
  );
};

export default Header;
