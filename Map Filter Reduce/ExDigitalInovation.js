let lista =[
    {
        nome: "Bolacha",
        valor:2.30
    },
    {
        nome: "Miojo",
        valor:1.20
    },
    {
        nome: "Coca-Cola",
        valor:8.99
    },

]

let valor1 ={
    value:250
}

let valor2 = {
    value:300
}

let numeros = [1,2];
let tabuada=[0,1,2,3,4,5,6,7,8,9,10];


/*Iterando com o valor Filter*/ 
function mapIterador(array, ValorThis){
    return array.map(function(item)
    {
        return item * this.value;
    },ValorThis);

}
/*Iteração sem this */
function multiplica(array){
    return array.map(function(item)
    {
        return item * 2;
    });

}

/* Function com Filter*/

function FiltraPAres(array){
    return array.filter(Tempares)
}
function Tempares(item){
    return item % 2 === 0 ;
}
/*Reduce */
function SomaNumeros(array){
    return array.reduce(function(prev,current){
        return prev + current;
    },0);
}

/*Segundo Exemplo Reduce */
let dinheiroDisponivel = 15;
function SaldoDisponivel(valor,array){
    return array.reduce(function(prev ,current){
            return prev - current.valor;
    },valor);
}
tabuada = multiplica(tabuada);
tabuada.forEach(element => {
    console.log(element);
});
console.log(FiltraPAres(tabuada));
console.log("Valor 250 multiplicado por 1 e 2 igual",mapIterador(numeros,valor1));
console.log("Valor 300 multiplicado por 1 e 2 igual",mapIterador(numeros,valor2));
console.log(SomaNumeros(numeros));
console.log(SaldoDisponivel(dinheiroDisponivel,lista));