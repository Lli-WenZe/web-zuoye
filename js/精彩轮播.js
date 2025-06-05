function myFunction(id) {
        return document.getElementById(id);
    }
    //封装动画函数
    function animate(element, target) {
        clearInterval(element.timeId)
        element.timeId = setInterval(function() {
            var current = element.offsetLeft;
            var step = 10;
            step = current < target ? step : -step;
            current += step;
            if (Math.abs(current - target) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                clearInterval(element.timeId);
                element.style.left = target + "px";
            }
        }, 10) 
    }
    //获取最外面的div
    var box = myFunction("box");
    //获取相框
    var inner = box.children[0];
    //获取相框宽度
    var innerWidth = inner.offsetWidth;
    //获取ul
    var ulObj = inner.children[0];
    //获取ol
    var olObj = inner.children[1];
    //获取ul中的li
    var liObjs = ulObj.children;
    //获取focus
    var focus = box.children[1];
    //声明变量存储点击当前按钮的索引
    var index = 0;
    //设置小按钮功能
    for (var i = 0; i < liObjs.length; i++) {
        var lis = document.createElement("li");
        lis.innerHTML = i + 1;
        olObj.appendChild(lis);
        lis.setAttribute("index", i);
        lis.onclick = function() {
            for (var j = 0; j < olObj.children.length; j++) {
                olObj.children[j].removeAttribute("class");
            }
            this.className = "current";
            index = this.getAttribute("index");
            animate(ulObj, -index * innerWidth);
        }
        olObj.children[0].className = "current";
    };
    //右边按钮功能
    //克隆第一个图片放在ul最后
    ulObj.appendChild(ulObj.children[0].cloneNode(true));
    //自动播放
    var timeId = setInterval(rightClick, 3000);
    //鼠标移入移出，左右按钮显示和隐藏
    box.onmouseover = function() {
        focus.style.display = "block";
        clearInterval(timeId);
    };
    box.onmouseout = function() {
        focus.style.display = "none";
        timeId = setInterval(rightClick, 3000);
    };

    //右边按钮功能函数
    function rightClick() {
        if (index == liObjs.length - 1) {
            index = 0;
            ulObj.style.left = 0 + "px";
        }
        index++;
        animate(ulObj, -index * innerWidth);
        //每张图片对应的按钮背景改变
        if (index == liObjs.length - 1) {
            olObj.children[olObj.children.length - 1].className = "";
            olObj.children[0].className = "current";
        } else {
            for (var i = 0; i < olObj.children.length; i++) {
                olObj.children[i].removeAttribute("class");
            }
            olObj.children[index].className = "current";
        }
    };
    //调用右边功能按钮函数
    focus.children[1].onclick = rightClick;
    //左边按钮
    console.log(focus.children[0]);
    focus.children[0].onclick = function() {
        if (index == 0) {
            index = ulObj.children.length - 1;
            console.log(index);
            console.log(-index * innerWidth);
            ulObj.style.left = -index * innerWidth + "px";
        }
        index--;
        animate(ulObj, -index * innerWidth);
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[index].className = "current";
    };