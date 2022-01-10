window.addEventListener("load", function() {
    // 이벤트 버블링을 이용해 사용자 이벤트 처리
    var section = document.querySelector("#section4");
    var tbodyNode = section.querySelector(".notice-list tbody");

    tbodyNode.onclick = function(e) {
        // 태그의 기본 행위를 막는 역할
        e.preventDefault();

        var target = e.target;

        console.log(target.nodeName);

        if(target.nodeName != "A")
            return;

        if(target.classList.contains("sel-button")) {
            // 조상 tr을 찾기 위해 순회
            // 어려움;;
            var tr = target.parentElement;
            for(; tr.nodeName != "TR"; tr=tr.parentElement);
            tr.style.background = "yellow";
        } else if(target.classList.contains("edit-button")) {

        } else if(target.classList.contains("del-button")) {

        }

    }
});