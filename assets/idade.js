function idade(anos){

    return `Em ${2021 + anos}, ${this.nome} tera ${this.idade + anos} anos de idade`;
};


let Bruno = {
    nome: 'Bruno',
    idade: 33
};

let Isabele = {
    nome: 'Isabele',
    idade: 29
};

let Aline = {
    nome: 'Aline',
    idade: 30
};

console.log(idade.call(Bruno,15));
console.log(idade.call(Isabele,15));
console.log(idade.call(Aline,15));

