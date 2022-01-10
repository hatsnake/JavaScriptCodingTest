window.addEventListener("load", function() {
    // 이벤트 버블링을 이용해 사용자 이벤트 처리
    var section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        console.log("imgList.onclick");
        if(e.target.nodeName !== "IMG") {
            return;
        }
        
        currentImg.src = e.target.src;
    };
    
    addButton.onclick = function(e) {
        // 버블링의 전파를 막는 함수
        e.stopPropagation();
        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    }

});