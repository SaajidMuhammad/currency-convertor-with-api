
var button = document.getElementById('button1');
button.addEventListener('click', convertCurrency);
let convertorEndpoint = 'https://free.currconv.com/api/v7/convert?q=CONVERT_VALUE&compact=ultra&apiKey=b2926387e0a03a02fa74';

function convertCurrency(){
    let currencyToChange = document.getElementById("listOfCurrency");
    let selectedCurreny = currencyToChange.options[currencyToChange.selectedIndex].value;

    let lkr = document.getElementById('lkrPrice').value;


    convertorEndpoint = convertorEndpoint.replace('CONVERT_VALUE',selectedCurreny)
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

        
      }).catch(e => console.log(e))

    // console.log("below fetch")
    
    

}