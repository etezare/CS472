// alert("hello World");
window.onload = function () {
    // document.getElementById("bigger").onclick= function(){
    //     alert("Essey World!");
    // }

    document.getElementById("bigger").onclick = changeTxtTimer;

    let timer = null;
    function changeTxtTimer() {
        if (timer === null) {
            timer = setInterval(sizing, 500);
        }
        else {
            clearInterval(timer);
            timer = null;
        }
    }



    function sizing() {
        let txt = document.getElementById("texted");
        let x = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        let fontSize = parseFloat(x);
        document.getElementById("texted").style.fontSize = (fontSize + 2) + "px";
    }

    document.getElementById("checkbox").onchange = function () {
        // alert("essey world");
        let ck = document.getElementById("checkbox");
        if (ck.checked === true) {
            document.getElementById("texted").style.fontWeight = "bold";
            document.getElementById("texted").style.color = "green";
            document.getElementById("texted").style.textDecoration = "underline";
            document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg') no-repeat center";

        }
        else {
            document.getElementById("texted").style.fontWeight = "normal";
            document.getElementById("texted").style.color = "black";
            document.getElementById("texted").style.textDecoration = "none";
            document.body.style.background = "white";
        }
    }

    document.getElementById("Igpay").onclick = piglatin;

    function piglatin() {
        let word = document.getElementById("texted");
        if (word.value[0] == 'i' || word.value[0] == 'o' || word.value[0] == 'e' || word.value[0] == 'u' || word.value[0] == 'a') {
            word.value = word.value + "-ay";
        } else {
            word.style.textAlign = "right";
            word.value = word.value + "-ay";
        }
    }

    document.getElementById("Malkovitch").onclick = malk;

    function malk() {
        let txt = document.getElementById("texted");
        if (txt.value.length >= 5) {
            txt.value = "Malkovitch";
        }
    }

}