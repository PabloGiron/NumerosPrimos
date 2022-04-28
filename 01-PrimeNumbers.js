
const primeNumbers = () => {
    let limit = 0;
    let currentNumber = 2;
    while(limit <= 10){
        if( isPrime(currentNumber)){
            console.log(currentNumber)
            limit++;
        }
        currentNumber++;
    }
}

function isPrime(number = 0) {
    let cont = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0) cont++;
    }
    if(cont <= 2) return true;
    else return false;
}

primeNumbers();