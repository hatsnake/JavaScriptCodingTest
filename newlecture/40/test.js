window.addEventListener("load", function() {
    // 선택한 레코드 삭제하기 연습문제
    var section = document.querySelector("#section1-1");

    var inputs = section.querySelectorAll(".del-button");

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = function(e) {
            var trNode = e.target.parentElement.parentElement;
            trNode.remove();
        }
    }
    
    // 선택된 이미지 보여주기
    /*
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function(e) {
            console.log(e.target.nodeName);
            console.log(e.target.src);
            currentImg.src = e.target.src;
        }   
    }
    */
});