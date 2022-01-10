window.addEventListener("load", function() {
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e) {
        if(e.target === box) {
            dragging = true;
        };
    };

    container.onmousemove = function(e) {
        //box.style.position = "absolute";

        if(dragging) {
            box.style.left = e.pageX - offset.x + "px";
            box.style.top = e.pageY - offset.y + "px";
        }
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }

});