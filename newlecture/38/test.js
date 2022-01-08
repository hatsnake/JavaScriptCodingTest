window.addEventListener("load", function() {

    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var titleTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function() {
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
    }

    bindData();

    var titleSorted = false;

    titleTd.onclick = function() {
        
        tbodyNode.innerHTML = "";

        if(!titleSorted) {
            // 오름차순 정렬
            notices.sort(function(a, b) {
                titleSorted = true;

                if(a.title < b.title)
                    return -1;
                else if(a.title > b.title)
                    return 1;
                else 
                    return 0;
            });
        } else {
            notices.reverse();
        }

        bindData();
    };

});