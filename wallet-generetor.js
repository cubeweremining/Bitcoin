document.getElementById("wallet-button").addEventListener("click", function() {
    fetch("http://127.0.0.1:5000/api/wallet-generetor", {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {

        document.getElementById("address").innerText = data.address;
        document.getElementById("key").innerText = data.key;
    })
    .catch(error => document.getElementById("address").innerText = "Erro",
    document.getElementById("key").innerText = "---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----");
});