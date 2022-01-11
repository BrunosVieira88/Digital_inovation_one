function valida(arr,number){

   try {
    
    if(!arr && !number) throw new ReferenceError("Envie os parametros");
    if(typeof arr !== 'object') throw new TypeError("Envie os parametros");
    if(typeof number !== 'number') throw new TypeError("Envie os parametros");
    if(arr.length !== number) throw new RangeError("Envie os parametros");

    return arr;

   } catch (error) {
       if (error instanceof ReferenceError) {

           console.log('erro de referencia!');
           console.log(error.message);
       }else if(error instanceof TypeError) {

        console.log('Tipo enviado invalido');

       }else if (error instanceof RangeError){
        console.log('Tamanho da string invalido!');
       }else{
        console.log('erro desconhecido ' + error);
       }
   }

}


valida();