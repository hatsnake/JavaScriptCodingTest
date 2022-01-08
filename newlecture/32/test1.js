window.addEventListener("load", function() {
    var section = document.querySelector("#section6");

    var titleInput = document.querySelector(".title-input");
    var menuListDiv = document.querySelector(".menu-list");
    var addButton = document.querySelector(".add-button");
    var delButton = document.querySelector(".del-button");

    addButton.onclick = function() {
        var title = titleInput.value;
        var txtNode = document.createTextNode(title);
        menuListDiv.appendChild(txtNode);
    }

    delButton.onclick = function() {
        // 첫번째 삭제
        //var txtNode = menuListDiv.childNodes[0];
        
        // 마지막 삭제
        var txtNode = menuListDiv.lastChild;
        
        txtNode.remove(txtNode);
    }

});