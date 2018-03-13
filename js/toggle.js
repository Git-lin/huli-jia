$(function () {
    window.name="toggle";
    addFooter();
    addHeader();
    dataLoading();
    pictureSwitching();
})

/*数据加载*/
function dataLoading() {
    $.getJSON("../json/data.json",function (data) {
        //图片加载
        var str='';
        var txt='';
        for(var i=0;i<data.min.length;i++){
            str+='<li><img src='+ data.min[i] +'></li>';
            txt+='<li><img src='+ data.max[i] +'></li>';
        }
        $(".mainImg ul").append(txt);
        $(".thumbnail ul").append(str);
        $(".thumbnail ul").children("li:first").trigger("click");
    })
}

/*图片切换*/
function pictureSwitching() {
    $(".thumbnail ul").on("click","li",function () {
        $(this).addClass("selected").siblings().removeClass("selected");
        //获取当前点击的索引值
        var idx=$(this).index();
        $(".mainImg ul li").eq(idx).fadeIn(700);
        $(".mainImg ul li").eq(idx).siblings().fadeOut(400);
    })
}