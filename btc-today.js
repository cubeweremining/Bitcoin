function getBitcoinPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,brl,gbp,jpy,aud,cad,chf,inr,cny,rub,mxn,sgd,hkd,nzd,krw,zar,try,sek,nok";

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        })
        .then(data => {
            document.getElementById("btc-usd").innerText = `USD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.usd)}`;
            document.getElementById("btc-eur").innerText = `EUR: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.eur)}`;
            document.getElementById("btc-brl").innerText = `BRL: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.brl)}`;
            document.getElementById("btc-gbp").innerText = `GBP: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.gbp)}`;
            document.getElementById("btc-jpy").innerText = `JPY: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.jpy)}`;
            document.getElementById("btc-aud").innerText = `AUD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.aud)}`;
            document.getElementById("btc-cad").innerText = `CAD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.cad)}`;
            document.getElementById("btc-chf").innerText = `CHF: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.chf)}`;
            document.getElementById("btc-inr").innerText = `INR: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.inr)}`;
            document.getElementById("btc-cny").innerText = `CNY: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.cny)}`;
            document.getElementById("btc-rub").innerText = `RUB: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.rub)}`;
            document.getElementById("btc-mxn").innerText = `MXN: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.mxn)}`;
            document.getElementById("btc-sgd").innerText = `SGD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.sgd)}`;
            document.getElementById("btc-hkd").innerText = `HKD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.hkd)}`;
            document.getElementById("btc-nzd").innerText = `NZD: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.nzd)}`;
            document.getElementById("btc-krw").innerText = `KRW: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.krw)}`;
            document.getElementById("btc-zar").innerText = `ZAR: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.zar)}`;
            document.getElementById("btc-try").innerText = `TRY: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.try)}`;
            document.getElementById("btc-sek").innerText = `SEK: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.sek)}`;
            document.getElementById("btc-nok").innerText = `NOK: ${Intl.NumberFormat("pt-BR").format(data.bitcoin.nok)}`;
        })
        .catch(error => {
            const currencies = ["usd", "eur", "brl", "gbp", "jpy", "aud", "cad", "chf", "inr", "cny", "rub", "mxn", "sgd", "hkd", "nzd", "krw", "zar", "try", "sek", "nok"];
            currencies.forEach(currency => {
                document.getElementById(`btc-${currency}`).innerText = "Error";
            });
        });
}

setInterval(getBitcoinPrices, 60000);
getBitcoinPrices();
