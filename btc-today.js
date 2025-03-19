function getBitcoinPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,brl";

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            document.getElementById("btc-usd").innerText = `${Intl.NumberFormat("pt-BR").format(data.bitcoin.usd)} USD`;
            document.getElementById("btc-eur").innerText = `${Intl.NumberFormat("pt-BR").format(data.bitcoin.eur)} EUR`;
            document.getElementById("btc-brl").innerText = `${Intl.NumberFormat("pt-BR").format(data.bitcoin.brl)} BRL`;
        
        })
        .catch(error => {
            document.getElementById("btc-usd").innerText = "Error";
            document.getElementById("btc-eur").innerText = "Error";
            document.getElementById("btc-brl").innerText = "Error";
        });
}

setInterval(getBitcoinPrices, 300000);
getBitcoinPrices();
