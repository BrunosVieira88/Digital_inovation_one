let array = [1,2,3,4,5,6];


function trocaPar(array){

    if(array.length == 0){
        return -1 ; 
    }else{
        let newarray =[];
        array.forEach(element => {
            if(element % 2 == 0){
                element = 0;
                newarray.push(element);    
            }else{
                newarray.push(element);  
            }
           
           
        }); 
        let qq = newarray;
        return qq;
    }
}

console.log(trocaPar(array));
