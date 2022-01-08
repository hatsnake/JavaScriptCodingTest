window.addEventListener("load", function() {
    var section = document.querySelector("#section6");

    var titleInput = document.querySelector(".title-input");
    var menuListUl = document.querySelector(".menu-list");
    var addButton = document.querySelector(".add-button");
    var delButton = document.querySelector(".del-button");

    addButton.onclick = function() {
        var title = titleInput.value;

        // 문자열 형태로 엘리먼트 노드 생성 (es5 방법)
        // 범위가 커질경우 추가했을 때 큰 문자열을 다시 로드하는 과정이 있음
        // 너무 커질 경우에는 자바스크립트 하드코드로 하는 것이 좋음
        /*
        menuListUl.innerHTML += "<li><a href=''>" + title + "</a></li>";
        */

        // 중간 해결책 (자식노드중에 가장 큰 노드는 createElement로 만들기)
        var aNode = '<a href="">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = aNode;

        //menuListUl.appendChild(li);

        // appendChild는 태그형식이 아닌 엘리먼트일 경우 에러 발생
        //menuListUl.appendChild(li);
        //menuListUl.append(title);
        menuListUl.append(li);

        // 자바스크립트 하드코드로 엘리먼트 노드 생성
        /*
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        var aNode = document.createElement("a");
        aNode.href = "https://www.naver.com";
        var liNode = document.createElement("li");

        // ul > li > a > text 구조
        liNode.appendChild(aNode);
        aNode.appendChild(txtNode);

        menuListUl.appendChild(liNode);
        */
    }

    delButton.onclick = function() {
        console.log("삭제");
        // 모든 노드(주석/비요소)에서 선택
        var txtNode = menuListUl.childNodes[0];
        // 엘리먼트 노드에서 선택
        //var liNode = menuListUl.children[0];
        var liNode = menuListUl.lastChild;

        //menuListUl.removeChild(liNode);
        //menuListUl.remove(liNode);
        liNode.remove();
    }

});