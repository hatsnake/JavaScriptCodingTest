window.addEventListener("load", function() {
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;

    console.log(left);
    console.log(top);

    container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        };
    };

    container.onmousemove = function(e) {
        if(!dragging) return;

        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;

        current.style.left = x + "px";
        current.style.top = y + "px";

        status.innerText = "x:" + x + ", y:" + y;
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

});