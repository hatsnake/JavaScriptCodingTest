window.addEventListener("load", function() {
    console.log("index.js 실행");

    // var txtX = document.getElementById("txt-x");
    // var txtY = document.getElementById("txt-y");
    // var btnAdd = document.getElementById("btn-add");
    // var txtSum = document.getElementById("txt-sum");

    var section2 = document.getElementById("section2");
    // var inputs = section2.getElementsByTagName("input");
    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtSum = inputs[3];

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function() {
        console.log("btnAdd 함수 실행");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    }
})