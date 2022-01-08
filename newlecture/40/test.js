window.addEventListener("load", function() {
    var section = document.querySelector("#section1-1");
    
    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");

    var inputs = tbodyNode.querySelectorAll(".del-button");

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = function(e) {
            var trNode = e.target.parentElement.parentElement;
            trNode.remove();
        }
    }
    
    /*
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function(e) {
            console.log(e.target.nodeName);
            console.log(e.target.src);
            currentImg.src = e.target.src;
        }   
    }
    */
});