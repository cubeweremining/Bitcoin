function searchAddress() {
    input = document.getElementById('search-address').value;
    window.open(`https://www.blockchain.com/explorer/search?search=${input}`, '_blank');
}

/*                 
                <div id="ws">
                    <div class="null" id="ws1">
                        <input type="text" id="search-address" placeholder="Enter a BTC address">
                        <button onclick="searchAddress()">Search</button>
                    </div>
                </div>
*/