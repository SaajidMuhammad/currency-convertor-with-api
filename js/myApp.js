
window.onload = () => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=b2926387e0a03a02fa74')
    .then(function(response) {
        return response.json();
    })
    .then(function(resp) {

        let allCurrency = resp.results;
        let currencyCodes = Object.keys(allCurrency);

        let list = document.getElementById('listOfCurrency');

        currencyCodes.forEach(cc => {
            let option = document.createElement('option');
            option.value = cc;
            option.innerText = `${cc} - ${allCurrency[cc].currencyName}`
            list.appendChild(option);
        });
    });
}


const convertCurrency = () => {

    let currencyToChange = document.getElementById("listOfCurrency");
    let lkr = document.getElementById('lkrPrice').value;

    let selectedCurreny = currencyToChange.options[currencyToChange.selectedIndex].value;
    
    
    if ((selectedCurreny == "") || (lkr == "")) {
        window.alert("Plz select a currency or pricee");
    } else {

    let button1 = document.getElementById("button1");
    button1.className = "button is-link is-loading";

    let convertFromLKR = '_LKR';

    const convertorEndpoint = `${baseEndpoint}q=${selectedCurreny}${convertFromLKR}&compact=ultra&apiKey=${APIkey}`;
    fetch(convertorEndpoint).then(function(response) {
        return response.json();
      })
      .then(function(resp) {

         console.log(resp);
            // let resp;
            
            let lkrPrice = resp; //answer        
            let answerHere = document.getElementById('answerHere');
        
            answerHere.innerText = lkrPrice;
            button1.classList.remove("is-loading");

            // return resp;
      }).catch(e => console.log(e))

    // console.log("below fetch")
    
    }

}

var button = document.getElementById('button1');
button.addEventListener('click', convertCurrency);
const baseEndpoint = 'https://free.currconv.com/api/v7/convert?';
const APIkey = 'b2926387e0a03a02fa74';



// https://free.currconv.com/api/v7/convert?q=USD_LKR&compact=ultra&apiKey=b2926387e0a03a02fa74