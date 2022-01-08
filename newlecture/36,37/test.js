window.addEventListener("load", function() {
    var section = document.querySelector("#section8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox")
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function() {
        // checkbox의 value가 나옴(기본값 : on)
        console.log(allCheckbox.value);
        // checkbox의 클릭여부를 boolean형으로 나옴(true, false)
        console.log(allCheckbox.checked);

        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']");
        
        for(var index = 0; index < inputs.length; index++) {
            inputs[index].checked = allCheckbox.checked;
        }
    };

    delButton.onclick = function() {
        // sudo 클래스를 통해 check가 된 checkbox만 가져오기
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length === 0) {
            alert("삭제할 내용이 없습니다.");
            return;
        }

        for(var index = 0; index < inputs.length; index++) {
            var trNode = inputs[index].parentElement.parentElement;
            trNode.remove();
        }
    };

    swapButton.onclick = function() {
        var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length !== 2) {
            alert("2개의 노드만 선택해야 바꿀 수 있습니다.");
            return;
        }

        var trs = [];
        for(var index = 0; index < inputs.length; index++) {
            trs.push(inputs[index].parentElement.parentElement);
        }

        var cloneNode = trs[0].cloneNode(true);
        // 클론 노드를 끼워넣고 자신은 빠진다.
        // replaceWith와 replaceChild 차이점 알기
        // trs[1]를 cloneNode로 바뀐다.
        // 배열은 안바뀌고 DOM이 바뀐다.
        // 어렵다.....
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);

        console.log(trs);
    };
});