function aprovados(array,media){

    let aprovados =[];

    for (let i = 0; i < array.length; i++) {
        
        if (array[i].nota >= media) {
          
            aprovados.push("O aluno " + array[i].nome + " foi aprovado!");
        }
    }
    return aprovados;
}

let array =[
    {
        nome : 'Bruno',
        nota : 6.5,
        classe: '3C'
    },
    {
        nome : 'Aline',
        nota : 4.5,
        classe: '3C'
    },
    {
        nome : 'Isabele',
        nota : 8.5,
        classe: '3C'
    },

];

let resposta  = aprovados(array, 5);

for (let i = 0; i < resposta.length; i++) {
    console.log(resposta[i]);  
};