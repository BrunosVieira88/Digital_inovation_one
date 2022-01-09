console.log("hello world");

let array = [ 0, 2 ,3,4,5,6,7,8,9,10];

function pares(array){

    novaarray = [];
    for(i =0 ; i<= array.length;i++){
    
       if(array[i] % 2 == 0 ){
            novaarray.push(array[i]);
       } 
    };

    return novaarray;
}

console.log(pares(array));

let contador = 0; 
function contando(){
    let contei = document.querySelector("#contador");
    console.log(contei);
    contador += 1; 

    contei.innerHTML = contador;

}

let numero = 0;
function aumenta(){
    let contei = document.querySelector("#num");
    console.log(contei);
    contador -= 1; 

    contei.innerHTML = contador;
}

function diminui(){
    let contei = document.querySelector("#num");
    console.log(contei);
    contador += 1; 

    contei.innerHTML = contador;
}
 


