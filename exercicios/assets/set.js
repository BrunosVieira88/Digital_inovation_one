let meuArray = [30,30,40,5,223,2049,3034,5];


function arrayUnicos(arr){

    const newArray = new Set(arr);

    return [...newArray];
}


console.log(arrayUnicos(meuArray));


