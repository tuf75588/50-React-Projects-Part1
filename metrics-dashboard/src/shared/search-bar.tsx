import React, { SetStateAction } from 'react';
import '../css/Searchbar.css';

type Props = {
  code: string;
  update: any;
  setChosen: React.Dispatch<SetStateAction<string>>;
  reset: () => void;
};

function SearchBar({ code, update, setChosen, reset }: Props): JSX.Element {
  const handleBtnClick = () => {
    setChosen(code);
    reset();
  };
  return (
    <section className="search-bar card-container">
      <div className="search-bar_label">
        <label htmlFor="stock-code">Search Stock Code:</label>
      </div>
      <input
        placeholder="STOCK CODE (e.g. AAPL)"
        value={code}
        onChange={update}
      />
      <button
        className="search-button"
        onClick={handleBtnClick}
        disabled={code.length < 1}
      >
        Search
      </button>
    </section>
  );
}
export default SearchBar;
