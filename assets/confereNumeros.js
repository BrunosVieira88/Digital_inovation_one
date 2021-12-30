function iguais(num1 , num2){
  if(num1 === num2){
   return console.log(`os numeros ${num1} e ${num2} são iguais`);
  }else{
    return console.log(`os numeros ${num1} e ${num2} NÃO são iguais`) ;
  }
}

function maiorque(num1 , num2){
    let resultado = num1 + num2;
    if(resultado >= 20){
        return console.log(`${num1} + ${num2} = ${resultado} maior que 20`);
    }else if(resultado <= 10){
        return console.log(`${num1} + ${num2} = ${resultado}  menor que 10`);
    }else{
        return console.log(`${num1} + ${num2} = ${resultado}  esta entre 10 e 20`); 
    }
}

function numeros(num1 , num2){
    maiorque(num1 , num2);
    iguais(num1 , num2);
}

numeros(4,8);

let contador =0; 

console.log(contador++);