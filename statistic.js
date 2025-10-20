const counter = document.querySelectorAll('.counter');

counter.forEach(myCounter);

function myCounter(Cvalue) {
    Cvalue.innerText = '0';
    incrementCounter(); //function call
    function incrementCounter() { //function to find our current numebr
        let currentNum =+ Cvalue.innerText;
        let dataCeil = Cvalue.getAttribute('data_ceil');
        let increment = dataCeil/15;
        currentNum = Math.ceil(currentNum + increment); //taking ceiling value (nearest highest value)
        //
        if (currentNum < dataCeil) {
            Cvalue.innerText = currentNum;
            setTimeout(incrementCounter, 200);
        }
        else {
            Cvalue.innerText = dataCeil;
        }
    }
}