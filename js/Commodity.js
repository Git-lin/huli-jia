$(function () {
    //商品展示
    var oA=$(".goodsChoose");
    //沙发
    var oSofas=$(".subnav_sofas");
    //桌椅
    var oTables=$(".subnav_tables");
    //床
    var oBeds=$(".subnav_beds");
    //柜
    var oStorage=$(".subnav_storage");
    //更多
    var oMore=$(".subnav_more");


    //获取JSON数据
    var strStren='',strImg='';
    //如果是在非主页点击的导航栏
    if(window.name!=="index"){
        strStren='../json/data.json';
        strImg='../';
    }
    else{
        strStren='json/data.json';
        strImg='';
    }
    $.getJSON(strStren,function (data) {
        //遍历goodsChoose里边的数据，加载到页面
        data.goodsChoose.forEach(function (item,index) {
            oA.append(`<a href="#">
                <div class="goodsImg">
                    <img src="${strImg}${item.img}" alt="">
                </div>
                <div class="goodsBaseInfo">
                    <span class="goodsName">${item.name}</span>
                    <span class="goodsPrice">
                        <span class="oldPrice">
                            <span>${item.price}</span>
                            <span class="deleOldPrice"></span>
                        </span>
                        <span class="newPrice">
                            <span>${item.newest}</span>
                        </span>
                    </span>
                </div>
            </a>`);
            //如果是第三个a标签则右边距为0
            if((index+1)%3==0){
                oA.children().eq(index).css("margin-right","0px");
            }

            if(item.newest !=""){
                $(".deleOldPrice").css("display","block");
            }

        })

        //循环添加动态数据
        data.sofas.forEach(function (item) {
            oSofas.append(`<li><a href="#">${item}</a></li>`);
        })
        data.tablesAndChairs.forEach(function (item) {
            oTables.append(`<li><a href="#">${item}</a></li>`);
        })
        data.beds.forEach(function (item) {
            oBeds.append(`<li><a href="#">${item}</a></li>`);
        })
        data.storage.forEach(function (item) {
            oStorage.append(`<li><a href="#">${item}</a></li>`);
        })
        data.more.forEach(function (item) {
            oMore.append(`<li><a href="#">${item}</a></li>`);
        })

        /*子导航移入移出事件*/
        $("#main").on("mouseenter",".classifyFilter>div>a",function (e) {
            e.preventDefault();
           $(this).next().slideDown(300);
        })
        $("#main").on("mouseleave",".classifyFilter>div",function (e) {
            e.preventDefault();
            $(this).children('ul').slideUp(300);
        })

        //子导航的二级菜单点击时改变其父级及其颜色
        $(".classifyFilter ul li").click(function () {
            //当前元素添加指定class,其他兄弟移出class
            $(this).addClass("active").siblings().removeClass("active");
            //将当前元素父级的上一个同级元素添加字体颜色
            $(this).parent().prev().css("color","#d8170e");
        })
        $(".goodsChoose a").click(function () {
            window.location.href=jump("pages/toggle.html");
        })

    })


})