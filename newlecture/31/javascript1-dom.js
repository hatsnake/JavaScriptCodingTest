window.addEventListener("load", function() {
    console.log("index.js 실행");

    var section2 = document.getElementById("section2");
    var section3 = document.getElementById("section3");
    var section4 = document.querySelector("#section4");
    var section5 = document.querySelector("#section5");

    // 6. 엘리먼트 노드의 속성 & CSS 속성 변경
    // text input tag
    var srcInput = section5.querySelector(".src-input");
    // button input tag
    var changeButton = section5.querySelector(".change-button");
    // select tag
    var imgSelect = section5.querySelector(".img-select");
    // datalist tag
    var datalist = section5.querySelector("#img-list");
    // img tag
    var changeImg = section5.querySelector(".img");
    // color input tag
    var colorInput = section5.querySelector(".color-input");

    changeButton.onclick = function() {
        console.log("changeButton 클릭");

        // input 값으로 이미지 변경
        //var img = srcInput.value;

        // select 값으로 이미지 변경
        //var img = imgSelect.value;
        
        // datalist의 값으로 이미지 변경
        //var img = srcInput.value;
        //changeImg.src = img;

        // 이미지 보더 색상 변경
        var colorValue = colorInput.value;
        //changeImg.style.borderColor = colorValue;
        changeImg.style["border-color"] = colorValue;

        // 이미지 클래스, 아이디 이름 찾기
        console.log("클래스 이름 : " + changeImg.className);
        console.log("아이디 이름 : " + changeImg.id);
    }

    


    // 5. childNodes를 이용한 노드 선택
    /*
    var box = section4.querySelector(".box");
    */

    /* 
    // 공백과 주석도 노드로 인식
    var input1 = box.childNodes[0];
    var input2 = box.childNodes[1];

    //태그만 노드로 인식
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
    */

    // 4. Selectors API Level1
    // querySelector, querySelectorAll
    /*
    var txtX = section3.querySelectorAll(".txt-x")[0];
    //var txtY = section3.querySelector(".txt-y");
    //var txtY = section3.querySelector("input[name='y']");
    var txtY = section3.querySelector("input[class='txt-y']");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
    */

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

    /*
    btnAdd.onclick = function() {
        console.log("btnAdd 함수 실행");

        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    }
    */
})