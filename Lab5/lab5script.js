function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else {
        return number2
    }
}

function maxOfThree(number1, number2, number3) {
    return max(max(number1,number2),number3);
}

function isVowel(c){
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'){
        return true;
    }
    else{
        return false;
    }
}


function sum(arr=[]) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];

    }

    return sum;
}


function multiply(arr=[]){
    let result=0;
    for(let i=0; i<arr.length; i++){
        result*=arr[i];

    }
    return result;
}


function reverse(str){
    let reversed='';
    for(let i=str.length-1; i>=0; i--){
        reversed=reversed+str.charAt(i);

    }
    return reversed;
}


function findLongestWord(arr=[]){
    let max=0;
    let index=0;
    for(let i=0; i<arr.length; i++){
       if(arr[i].length>max){
           max=arr[i].length;
           index=i;
       }
    }
    return arr[index];
}

function filterLongWords(arr=[],i){
   return arr.filter(arr=>arr.length>i);
}


// -------------------------------------------------------------------

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  console.log("Expected output of largestNumber(10,20) is 20  " + max(10,20));
  