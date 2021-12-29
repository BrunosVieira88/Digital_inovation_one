function tarefa(){
   let item = document.createElement('div');
   let valor = document.querySelector("#frase"); 

   if(valor.value == ""){
       alert("Você precisa criar uma tarefa!")
   }else{
    item.innerHTML = `
   
    <input type="checkbox"><label>${valor.value}</label>
   
   `;
    document.querySelector("#aparece").appendChild(item);


   }
  
  
   

}
