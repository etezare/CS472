function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else {
        return number2
    }
}

function maxOfThree(number1, number2, number3) {
    // return max(max(number1, number2), number3);
    if (number1 > number2) {
        if (number1 > number3) {
            return number1;
        } else {
            return number3;
        }
    } else {
        if (number2 > number3) {
            return number2;
        }
        else {
            return number3;
        }
    }
}

function isVowel(c) {
    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
        return true;
    }
    else {
        return false;
    }
}


function sum(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }

    return sum;
}


function multiply(arr = []) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];

    }
    return result;
}


function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str.charAt(i);

    }
    return reversed;
}


function findLongestWord(arr = []) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}

function filterLongWords(arr = [], i) {
    return arr.filter(arr => arr.length > i);
}


// ----------------------------Testing Functions---------------------------------------

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function myFunctionTest2(expected,found){
    if (expected == found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

console.log("Expected output of max(10,20) is 20  " + myFunctionTest(20, max(10, 20)));
console.assert((myFunctionTest(10, max(20, 10)))=="TEST SUCCEEDED","Failed assert test");
console.log("Expected output of maxOfThree(10,20,30) is 30  " + myFunctionTest(30, maxOfThree(10, 20, 30)));
console.assert((myFunctionTest(30, maxOfThree(10, 20, 30)))== "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.assert((myFunctionTest(true, isVowel('a')))== "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of sum([1,2,3,4,5,6]) is 21  " + myFunctionTest(21, sum([1, 2, 3, 4, 5, 6])));
console.assert((myFunctionTest(11, sum([1, 2, 3, 4, 5, 6]))) == "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of multiply([1,2,3,4,5,6]) is 720  " + myFunctionTest(720, multiply([1, 2, 3, 4, 5, 6])));
console.assert((myFunctionTest (720, multiply([1, 2, 3, 4, 5, 6])))== "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of reverse('Essey') is 'yessE' " + myFunctionTest("yessE", reverse("Essey")));
console.assert((myFunctionTest("yessE", reverse("Essey")))== "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of findLongestWord(['Essey','Michael','Abraham','Biniam','Maharishi']) is 'Maharishi' " + myFunctionTest("Maharishi", findLongestWord(["Essey", "Michael", "Abraham", "Biniam", "Maharishi"])));
console.assert((myFunctionTest("Maharishi", findLongestWord(["Essey", "Michael", "Abraham", "Biniam", "Maharishi"]))) == "TEST SUCCEEDED", "Failed assert test");
console.log("Expected output of filterLongWords(['Essey','Michael','Abraham','Biniam','Maharishi'],6) is 'Michael','Abraham','Maharishi' " + myFunctionTest2('Michael,Abraham,Maharishi', filterLongWords(['Essey', 'Michael', 'Abraham', 'Biniam', 'Maharishi'], 6)));
console.assert((myFunctionTest2('Michael,Abraham,Maharishi', filterLongWords(['Essey', 'Michael', 'Abraham', 'Biniam', 'Maharishi'], 6))) == "TEST SUCCEEDED", "Failed assert test");
