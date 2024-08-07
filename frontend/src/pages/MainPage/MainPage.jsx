import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bankName, setBankName] = useState('');
  const [error, setError] = useState(false);

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
    setError(false);
  };

  const handleSearch = () => {
    const validBanks = ['KB국민은행', 'NH농협은행', '신한은행', '우리은행', '하나은행']; 
    if (!validBanks.includes(bankName)) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="menu">
          <button onClick={() => alert('Product 1')}>Product 1</button>
          <button onClick={() => alert('Product 2')}>Product 2</button>
          <button onClick={() => alert('Product 3')}>Product 3</button>
        </nav>
      </header>
      <main>
        <div className="search-section">
          <input
            type="text"
            placeholder="Enter bank name"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <button onClick={handleSearch}>Search</button>
          {error && <div className="error">Bank not found or typo error</div>}
        </div>
      </main>
      <footer>
        <a href="/login">Login</a>/<a href="/signup">Sign Up</a>
      </footer>
    </div>
  );
};

export default App;
