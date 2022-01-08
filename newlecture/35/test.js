window.addEventListener("load", function() {
    var section = document.querySelector("#section8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function() {
        var nextNode = currentNode.nextElementSibling;

        // 다음 형제 엘리먼트 노드가 없을 때
        if(nextNode == null) {
            alert("더 이상 이동할 수 없습니다.");
            return;
        }

        // nextNode 변수가 존재하기 때문에 메모리에서 없어지지는 않음
        // 가비지 컬렉션이 없어버리기 전에 위치 이동을 시켜야한다.
        // insertBefore(삭제할 노드, 위쪽에 삽입을 위한 기준 노드)
        //tbodyNode.removeChild(nextNode);
        //tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin", nextNode);
    };

    upButton.onclick = function() {
        var previousNode = currentNode.previousElementSibling;

        // 이전 형제 엘리먼트 노드가 없을 때
        if(previousNode == null) {
            alert("더 이상 이동할 수 없습니다.");
            return;
        }

        //tbodyNode.removeChild(currentNode);
        //tbodyNode.insertBefore(currentNode, previousNode);
        currentNode.insertAdjacentElement("afterend", previousNode);
    };
});