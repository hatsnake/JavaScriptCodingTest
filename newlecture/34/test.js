window.addEventListener("load", function() {
    var notices = [
        {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
        {id:5, title:"복제해줘~~~", regDate:"2019-01-26", writerId:"newlec", hit:17},
    ];

    var section = document.querySelector("#section7");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function() {
        var trNode = noticeList.querySelector("tbody tr");
        // true : 자손 노드도 복제, false : tr의 껍데기만 복제
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");

        // 테이블에 있는 tr 엘리먼트 노드를 복제하고 그안에 내용을 notices 데이터로 바꾼다.
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + "</a>";
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);

    };

    templateButton.onclick = function() {
        var template = section.querySelector("template");

        for(var index = 0; index < notices.length; index++) {
            // 템플릿 노드 복제
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");

            // 테이블에 있는 tr 엘리먼트 노드를 복제하고 그안에 내용을 
            // notices 데이터로 바꾼다.
            tds[0].textContent = notices[index].id;
            //tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + "</a>";
            var aNode = tds[1].children[0];
            aNode.href = notices[index].id;
            aNode.textContent = notices[index].title;

            tds[2].textContent = notices[index].regDate;
            tds[3].textContent = notices[index].writerId;
            tds[4].textContent = notices[index].hit;

            tbodyNode.append(cloneNode);
        }
    };
});