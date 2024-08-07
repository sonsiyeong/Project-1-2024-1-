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
          <button onClick={() => alert('예금')}>예금</button>
          <button onClick={() => alert('적금')}>적금</button>
          <button onClick={() => alert('대출')}>대출</button>
          <button onClick={() => alert('체크카드')}>체크카드</button>
        </nav>
        <div className="auth-links">
          <a href="/login">로그인</a>/<a href="/signup">회원가입</a>
        </div>
      </header>
      <main>
        <div className="search-section">
          <input
            type="text"
            placeholder="은행명을 입력하세요"
            value={bankName}
            onChange={handleBankNameChange}
          />
          <button onClick={handleSearch}>검색</button>
          {error && <div className="error">없는 은행명이거나 오타가 있습니다</div>}
        </div>
      </main>
    </div>
  );
};

export default App;

