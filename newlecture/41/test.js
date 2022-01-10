window.addEventListener("load", function() {
    // 선택한 레코드 삭제하기 연습문제 (버블링 추가)
    var section = document.querySelector("#section3-1");

    var tbodyNode = section.querySelector("tbody");

    tbodyNode.onclick = function(e) {
        if(e.target.className !== "del-button") {
            return;
        }

        var trNode = e.target.parentElement.parentElement;
        trNode.remove();
    }

    // for문을 통한 이벤트 처리 방식 (구식)
    /*
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = function(e) {
            var trNode = e.target.parentElement.parentElement;
            trNode.remove();
        }
    }
    */
    
    // 이벤트 버블링을 이용해 사용자 이벤트 처리
    /*
    var section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        if(e.target.nodeName !== "IMG") {
            return;
        }

        currentImg.src = e.target.src;
    };
    */

    // for문을 통한 이벤트 처리 방식 (구식)
    /*
    for(var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function(e) {
            console.log(e.target.nodeName);
            console.log(e.target.src);
            currentImg.src = e.target.src;
        }   
    }
    */
});