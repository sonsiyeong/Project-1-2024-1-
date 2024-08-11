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
        <div className="logo">
          <img src="logo.png" alt="Ewha Logo" />
          <h1>EWHA INVESTIGATION</h1>
        </div>
        <nav className="menu">
          <button onClick={() => alert('예금')}>예금</button>
          <button onClick={() => alert('적금')}>적금</button>
          <button onClick={() => alert('대출')}>대출</button>
          <button onClick={() => alert('체크카드')}>체크카드</button>
        </nav>
        <div className="auth-section">
          <input
            type="text"
            placeholder="은행명 입력"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <button className="search-button" onClick={handleSearch}>🔍</button>
          {error && <div className="error">없는 은행명이거나 오타가 있습니다</div>}
          <a className="auth-link" href="/login">LOGIN / SIGN UP</a>
        </div>
      </header>
      <main>
        <img src="campus.jpg" alt="Campus" className="main-image" />
      </main>
    </div>
  );
};

export default App;

