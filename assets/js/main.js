const calc = document.querySelector('[calc]');
const title = document.querySelector('[title]');
const result = document.querySelector('[paragraph]');

calc.addEventListener('click', () => {
  const input = document.querySelector('[input]').value;
  let userInput = parseInt(input);
  let list = [];
  let limitRoot = Math.floor(Math.sqrt(userInput));

  for (let number = 0; number <= userInput; number++){
    list.push(number);
  }
  verifyRoot(list, limitRoot, userInput);
});


function verifyRoot (list, limitRoot, userInput){
  for (let element = 2; element <= limitRoot; element++){
    if (list[element]){      
      for (let root = element * element; root <= userInput; root += element){
        list[root] = false;
      }
    }    
  }
  selectPrimes(list, userInput);
}


function selectPrimes (list, userInput){
  let prime = [];

  for (let index = 2; index <= userInput; index ++){
    if(list[index]){
      prime.push(` ${index}`);
    }
  }
  showResult(prime);
}


function showResult (prime){
  title.textContent = `Foram encontrados ${prime.length} números primos:`;
  result.textContent = prime;
}

const reset = document.querySelector('[reset]');
reset.addEventListener('click', () => {
  input.focus();
  input.value = '';
  title.textContent = '';
  result.textContent = '';
});