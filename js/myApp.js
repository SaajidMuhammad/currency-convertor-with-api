
window.onload = () => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=b2926387e0a03a02fa74')
    .then(function(response) {
        return response.json();
    })
    .then(function(resp) {
        // console.log(JSON.stringify(myJson));
        // console.log(resp.results);

        let x = resp.results;
        console.log(x);

        let currencyCodes = Object.keys(x)
        console.log(currencyCodes)

        let list = document.getElementById('listOfCurrency');

        currencyCodes.forEach(cc => {
            console.log(cc)
            let option = document.createElement('option');
            option.value = cc;
            option.innerText = `${cc} - ${x[cc].currencyName}`
            list.appendChild(option);
        })


        // let {currencyName,id}=AED ;

        // console.log(currencyName);
        // console.log(id);

        
        // let option = document.createElement('option');

        // option.appendChild = document.createTextNode(x);
        // list.appendChild(option);
        

    });
}


const convertCurrency = () => {

    let currencyToChange = document.getElementById("listOfCurrency");
    let selectedCurreny = currencyToChange.options[currencyToChange.selectedIndex].value;
    
    let lkr = document.getElementById('lkrPrice').value;
// 
    if ((selectedCurreny == "") || (lkr == "")) {
        window.alert("Plz select a currency or pricee");
    } else {

    let button1 = document.getElementById("button1");
    button1.className = "button is-link is-loading";

    const convertorEndpoint = `${baseEndpoint}q=${selectedCurreny}&compact=ultra&apiKey=${APIkey}`
    fetch(convertorEndpoint).then(function(response) {
        return response.json();
      })
      .then(function(resp) {
        // console.log("response");
        // console.log(resp);
            

            switch(selectedCurreny) {
                case 'USD_LKR':
                    var value = resp.USD_LKR;
                break;
                case 'EUR_LKR':
                    var value = resp.EUR_LKR;
                break;
                case 'INR_LKR':
                    var value = resp.INR_LKR;
                break;
                default:
                
            
            }
            
            
            let lkrPrice = value * lkr; //answer
        
            
            let answerHere = document.getElementById('answerHere');
        
            answerHere.innerText = lkrPrice;

            button1.classList.remove("is-loading");
      }).catch(e => console.log(e))

    // console.log("below fetch")
    
    }

}

var button = document.getElementById('button1');
button.addEventListener('click', convertCurrency);
const baseEndpoint = 'https://free.currconv.com/api/v7/convert?';
const APIkey = 'b2926387e0a03a02fa74';

// q=CONVERT_VALUE&compact=ultra&apiKey=b2926387e0a03a02fa74';

