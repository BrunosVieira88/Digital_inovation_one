//verificar palindromo

texto = "A mala nada na lama";

function palindromo(texto){

        texto = texto.toLowerCase();
        let compara1 = texto.replaceAll(" ","").replace(/[^a-zA-Zs]/g, "");
        let novo = texto.split("").reverse().join("");
        let compara2 = novo.replaceAll(" ","").replace(/[^a-zA-Zs]/g, "");

        if(compara1 == compara2){    
            return console.log(`A frase ${texto} é um palindromo`);
        }else{
            return console.log(`A frase ${compara2} não é um palindromo ${compara1} `);
        }


    
}

palindromo(texto);