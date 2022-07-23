const calc = document.querySelector('[calc]');
const title = document.querySelector('[title]');
const result = document.querySelector('[paragraph]');

calc.addEventListener('click', () => {
  const input = document.querySelector('[input]').value;
  let userInput = parseInt(input);
  let list = [];

  //coleta a raiz quadrada do valor informado e arredonda para baixo.
  let limitRoot = Math.floor(Math.sqrt(userInput));

  //cria uma array de 0 ao número informado pelo usuário
  for (let number = 0; number <= userInput; number++){
    list.push(number);
  }
  verifyRoot(list, limitRoot, userInput);
});


function verifyRoot (list, limitRoot, userInput){
  //faz iteração passando por todos os elementos do array iniciando em 2, enquanto o elemento for menor que a raiz do número informado.
  for (let element = 2; element <= limitRoot; element++){

    //condição se o valor do elemento existir dentro do array 
    if (list[element]){
      
      //encontra os múltiplos(root) de cada elemento fazendo a raiz deles, e definindo o seu valor como falso. Itera o valor da raiz com o próximo elemento a ser verificado.
      for (let root = element * element; root <= userInput; root += element){
        list[root] = false;
      }
    }    
  }
  selectPrimes(list, userInput);
}


function selectPrimes (list, userInput){
  let prime = [];
  //itera os elementos(index) iniciando em 2, enquanto o valor do elemento for menor que o input do usuário
  for (let index = 2; index <= userInput; index ++){

    //se o valor do elemento(index) ainda existir no array, este será adicionado a um novo array
    if(list[index]){

      //array contendo somente os elementos que passaram na verificação.
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