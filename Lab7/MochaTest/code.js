function reverse(str){
    return str.split("").reduce((rev, char)=> char + rev, ''); 
  }

function sum(arr=[]){
   return arr.reduce((accumulator, currentValue) => accumulator+currentValue);
}

function multiply(arr=[]){
    return arr.reduce((accumulator,currentValue)=>accumulator*currentValue);
}

function filterLongWords(arr = [], i) {
    return arr.filter(arr => arr.length > i);
}


