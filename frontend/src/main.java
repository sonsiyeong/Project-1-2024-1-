// scripts.js
function showComparison(product) {
    document.getElementById('results').innerHTML = `Showing comparison for ${product}`;
}

function searchBank() {
    const bankName = document.getElementById('bank-name').value;
    const validBanks = ['KB 국민은행', 'NH 농협은행', '신한은행', '우리은행', '하나은헹'];

    if (validBanks.includes(bankName)) {
        document.getElementById('results').innerHTML = `Showing products for ${bankName}`;
    } else {
        document.getElementById('results').innerHTML = 'Error: Bank not found or invalid name';
    }
}
