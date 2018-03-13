
$(function () {
    window.name="index";
    //调用头部尾部
     addHeader();
     addFooter();


});

/*功能：图片轮播*/

//获取图片列表
var imgListPlay = $('#main .imgListPlay');
    console.log(imgListPlay);
var  imgList=$('#main .imgListPlay img');
    console.log(imgList);
var  imgListleng = imgList.length;
    console.log(imgListleng);

/*生成控制点*/

//添加控制点容器
imgListPlay.after("<div class='slideList-point'></div>");
var slideListpoint = imgListPlay.next();

//添加控制点并给第一个圆点默认加上ckd样式
for(var i = 0; i < imgListleng; i ++) {
    slideListpoint.append("<i></i>")
}
slideListpoint.children().first().addClass("ckd");

/*图片自动轮播函数,调用runImgSlide()方法*/
var timer = setInterval(function () {
    runImgSlide();
},6000);

/*点击控制点切换图片*/
slideListpoint.children().click(function() {
    var thisIdx = $(this).index();
    $(this).addClass("ckd").siblings().removeClass("ckd");
    imgList.eq(thisIdx).addClass("show enlarge-1").siblings().removeAttr("class");
    clearInterval(timer);
    timer = setInterval(function() {
        runImgSlide();
    },6000);
});

/*runImgSlide()方法*/
function runImgSlide() {
    // 获取当前有show类名的图片的索引
    var showImage = $(".imgListPlay > img.show"),
        showImageidx = showImage.index();
    // 创建1~4之间的随机数(用来随机改变transform的position)
    var randomNum = Math.round(Math.random() * 3 + 1);
    //如果存在下一个元素，则移出当前图片和控制点样式，给下一个图片和控制点加上样式
    if(showImageidx != imgListleng - 1) {
        showImage.removeAttr("class").next().addClass("show enlarge-" + randomNum);
        slideListpoint.children().eq(showImageidx + 1).addClass("ckd").siblings().removeAttr("class");
    }
    //如果不存在下一个元素，就给第一张图片和控制点加上样式
    else {
        showImage.removeAttr("class");
        imgList.eq(0).addClass("show enlarge-" + randomNum);
        slideListpoint.children().eq(0).addClass("ckd").siblings().removeAttr("class");
    }
}












