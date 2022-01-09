 let users = new Map();

users.set('Bruno','Admin');
users.set('Aline','Admin');
users.set('Isabele','user');


function GetAdmin(map){

    let array = [];

    for ([key , value] of map) {
        if (value === 'Admin') {
            array.push(key);   
        }   
    }
    return array; 
}


console.log(GetAdmin(users));