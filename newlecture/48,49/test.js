window.addEventListener("load", function() {
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    // 문제 : 스크롤바를 아래로 내리고 클릭이 이상해짐
    container.onclick = function(e) {
        console.log("======================================");
        console.log("basic - x:" + e.x + ", y:" + e.y);
        console.log("client - x:" + e.clientX + ", y:" + e.clientY);
        console.log("page - x:" + e.pageX + ", y:" + e.pageY);
        console.log("offset - x:" + e.offsetX + ", y:" + e.offsetY);
        console.log("======================================");
        // box.style.position = "static";
        box.style.position = "absolute";
        box.style.left = e.x + "px";
        box.style.top = e.y + "px";
    };
});