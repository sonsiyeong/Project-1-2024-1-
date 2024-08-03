import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './BankSearch.css';

// Header 컴포넌트
const Header = ({ onNavigate }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li onClick={() => onNavigate('home')}>Home</li>
                    <li onClick={() => onNavigate('login')}>Login/Signup</li>
                </ul>
            </nav>
        </header>
    );
};

// BankSearch 컴포넌트
const banks = ['KB국민은행', 'NH농협은행', '신한은행', '우리은행', '하나은행'];

const BankSearch = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = () => {
        if (banks.includes(input)) {
            alert(`Displaying products for ${input}`);
            setError(null);
        } else {
            setError('Bank not found. Please try again.');
        }
    };

    return (
        <div className="bank-search">
            <input
                type="text"
                placeholder="Enter bank name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

// Auth 컴포넌트
const Auth = () => {
    return (
        <div>
            <h2>Login/Signup Page</h2>
            {/* Implement login/signup forms here */}
        </div>
    );
};

// App 컴포넌트
function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Header onNavigate={handleNavigation} />
            {currentPage === 'home' && <BankSearch />}
            {currentPage === 'login' && <Auth />}
            {/* Add more pages as needed */}
        </div>
    );
}

// index.js 추가
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
