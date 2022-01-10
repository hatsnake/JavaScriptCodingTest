window.addEventListener("load", function() {
    var section = document.querySelector("#section5");

    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");
    var fileName = section.querySelector(".file-name");

    // 이벤트 트리거 방법 : IE버전 지원 안함 (다른 방법 존재)
    fileTriggerButton.onclick = function() {
        var event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        fileButton.dispatchEvent(event);
    }

    fileButton.onchange = function() {
        console.log(fileButton.files[0]);
        fileName.textContent = fileButton.files[0].name;
    }
});