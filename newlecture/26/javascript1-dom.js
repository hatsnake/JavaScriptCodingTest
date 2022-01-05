window.addEventListener("load", function() {
    console.log("index.js 실행");

    var section2 = document.getElementById("section2");
    var section3 = document.getElementById("section3");

    // 4. Selectors API Level1
    // querySelector, querySelectorAll
    var txtX = section3.querySelectorAll(".txt-x")[0];
    //var txtY = section3.querySelector(".txt-y");
    //var txtY = section3.querySelector("input[name='y']");
    var txtY = section3.querySelector("input[class='txt-y']");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    // 3. getElementsByClassName()
    /*
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];
    */

    // 2. getElementsByTagName()
    /*
    var inputs = section2.getElementsByTagName("input");
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */

    // 1. getElementById()
    /*
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");
    */

    btnAdd.onclick = function() {
        console.log("btnAdd 함수 실행");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    }
})