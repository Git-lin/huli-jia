//封装头部
function addHeader(data) {
    $(".header").append(`
    <div class="dpi-1260 pos-rela">
        <!--头部背景-->
        <div class="header_bg posAbsolute">
            <img src="images/bg_header.jpg" alt="">
        </div>
        <!--联系我们横标签-->
        <a href="#" class="contUS_mark sprit posAbsolute"></a>
        <!--logo-->
        <div class="logo sprit">
            <!--返回首页链接按钮-->
            <a href="#"></a>
        </div>
        <!--登录按钮（用户名）&&购物车组-->
        <div class="loginOrShop posAbsolute">
            <!--登录按钮-->
            <a href="#" class="login sprit"></a>
            <!--分割线-->
            <span class="gapLine_0"></span>
            <!--购物车-->
            <a href="#" class="shopping hasRreasure sprit">
                <!--超过9个用...代替-->
                <span class="treas_count">3</span>
            </a>
            <!--购物车内容-->
            <div class="treas_brief posAbsolute">
                <div class="treas_brief-content">
                    <p>
                    <span class="treas_name">
                        <a href="#">9成新转角沙发超级转角沙发</a>
                    </span>
                        <span class="treas_price">9999</span>
                        <span class="treas_count">x2</span>
                    </p>
                    <p>
                    <span class="treas_name">
                        <a href="#">3成新超级打茶几</a>
                    </span>
                        <span class="treas_price">9999</span>
                        <span class="treas_count">x2</span>
                    </p>
                    <p>
                    <span class="treas_name">
                        <a href="#">7成新超级电视柜</a>
                    </span>
                        <span class="treas_price">9999</span>
                        <span class="treas_count">x2</span>
                    </p>
                </div>
                <div class="treas_brief-goto">
                    <a href="#">查看购物车</a>
                </div>
            </div>
        </div>
        <!--地区选择-->
        <div class="select_custom dist-select">
            <i data-value="0" style="background-position:106px 0px;">成都地区</i>
            <dl style>
                <dt data-value="0">成都地区</dt>
                <dt data-value="1">北京地区</dt>
                <dt data-value="2">上海地区</dt>
                <dt data-value="3">深圳地区</dt>
                <dt data-value="4">其他地区</dt>
            </dl>
        </div>
    </div>
    <!--主导航栏-->
    <div class="main_nav posAbsolute fl">
        <div class="dpi-1260">
            <ul>
                <li class="ml-10">
                    <a href="#">沙发&nbsp;&nbsp;&nbsp;SOFAS</a>
                    <div>
                        <a href="#" class="lev2_col-1">单人位</a>
                        <a href="#" class="lev2_col-1">双人位</a>
                        <a href="#" class="lev2_col-1">三人位</a>
                        <a href="#" class="lev2_col-1">休闲沙发</a>
                        <a href="#" class="lev2_col-1">转角沙发</a>
                    </div>
                </li>
                <li>
                    <a href="#">桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS</a>
                    <div>
                        <a href="#" class="lev2_col-2">餐桌</a>
                        <a href="#" class="lev2_col-2">餐椅</a>
                        <a href="#" class="lev2_col-2 clearf-1">书桌</a>
                        <a href="#" class="lev2_col-2">凳子</a>
                        <a href="#" class="lev2_col-2 clearf-1">电脑桌</a>
                        <a href="#" class="lev2_col-2">休闲椅</a>
                        <a href="#" class="lev2_col-2 clearf-1">梳妆台</a>
                        <a href="#" class="lev2_col-2">户外椅</a>
                        <a href="#" class="lev2_col-2 clearf-1">其他</a>
                    </div>
                </li>
                <li>
                    <a href="#">床&nbsp;&nbsp;&nbsp;BEDS</a>
                    <div>
                        <a href="#" class="lev2_col-1">1.5米</a>
                        <a href="#" class="lev2_col-1">1.8米</a>
                        <a href="#" class="lev2_col-1">其他</a>
                    </div>
                </li>
                <li class="w-134">
                    <a href="#">柜&nbsp;&nbsp;&nbsp;STORAGE</a>
                    <div>
                        <a href="#" class="lev2_col-2 w-84">衣柜</a>
                        <a href="#" class="lev2_col-2 w-84">储物柜</a>
                        <a href="#" class="lev2_col-2 w-84 clearf-1">书柜</a>
                        <a href="#" class="lev2_col-2 w-84">电视柜</a>
                        <a href="#" class="lev2_col-2 w-84 clearf-1">鞋柜</a>
                        <a href="#" class="lev2_col-2 w-84 ">床头柜</a>
                        <a href="#" class="lev2_col-2 w-84 clearf-1">其他</a>
                    </div>
                </li>
                <li>
                    <a href="#">更多&nbsp;&nbsp;&nbsp;MORE</a>
                    <div>
                        <a href="#" class="lev2_col-1">组合产品</a>
                        <a href="#" class="lev2_col-1">日用家居</a>
                        <a href="#" class="lev2_col-1">家居饰品</a>
                        <a href="#" class="lev2_col-1">其他</a>
                        <a href="#" class="lev2_col-1"></a>
                    </div>
                </li>
                <div class="nav_search">
                    <input type="text" value placeholder="搜索" class="fl">
                    <i class="sprit fl"></i>
                </div>
            </ul>
        </div>
    </div>
`);
    /*登录按钮点击时跳转登录页面*/
    $(".header").on("click",".loginOrShop .login",function (e) {
        if($(this).text()){
        location.href=jump("pages/toggle.html");
        }
        else{
            location.href=jump("pages/login.html");
        }

    })

    //logo的点击事件：点击回到主页面
    $(".header").on("click",".logo a",function () {
        window.location.href=jump("index.html");
    })


    /*功能：点击成都地区显示下拉*/
    $(".header").on("click",".select_custom",function () {
        $(".header .select_custom dl").css("display","block");
        $(".header .select_custom i").css("background-position","106px -34px");

    })

    /*点击地区选项时将当前点击的值赋值给父级，并收回下拉框*/
    $(".header").on("click","dt",function(){
        var textVal=$(this).text();
        $(this).parents(".select_custom").children("i").text(textVal);
        $(".header .select_custom dl").slideToggle(300);
        $(".header .select_custom i").css("background-position","106px 0px");

    })

    //点击购物车图标：显示隐藏购物车详情
    var count=0;
    $(".header").on("click",".shopping",function (e) {
        e.stopPropagation();
        e.preventDefault();
        if(Number(count)%2===1){
            count++;
            $(this).css("border","1px solid transparent");
        }
        else{
            $(this).css("border","1px solid #ccc");
            count++;
        }

        $('.treas_brief').slideToggle(300);
    })
    //点击查看购物车，跳转到购物车页面
    $('.header').on('click','.treas_brief-goto',function () {
        location.href = jump("pages/shopcar.html");
    })

    localFile();
    //主导航栏，子导航栏的移入移出事件
    function localFile() {
        /*主导航移入移出事件*/
        $(".header").on("mouseenter",".main_nav>div>ul>li",function(){
            $(this).children("div").slideDown(300);
            $(this).css({
                "border":"1px solid #bfbfbe",
                "background-color":"#fff",
            });
        })
        $(".header").on("mouseleave",".main_nav>div>ul>li",function(){
           $(this).children("div").slideUp(0);
            $(this).delay(300).css({
                "border":"1px solid transparent",
                "background-color":"transparent",
            });
        })


    }

    /************判断登录用户*/
        //显示用户名函数
    loginUser();
    function loginUser() {
        //获取登录的本地存储用户
        var user=localStorage.getItem("current");
        var $login=$(".header .login");
        if(window.name!=="login"){
            if(user){
                $login.removeClass("sprit");
                $login.text(user);
                $login.addClass("user");
            }else{
                $login.removeClass("user");
                $login.addClass("sprit");
            }
        }

    }


    //如果不是主页，给其他页面的header加上背景图片
    if(window.name !== 'index'){
        $('.header_bg>img').attr('src','../images/bg_header.jpg');
    }
}
//封装尾部
function addFooter(data) {
    $(".footer").append(`<!--尾部标语-->
<div>生活要过得朴素而有味道，但不用过得奢华</div>
<!--宣传关键词标签-->
<div>
    <ul class="advantage">
        <li><i>环保</i><p>无甲醛 大自然</p></li>
        <li><i>低价</i><p>低于购买价6折</p></li>
        <li><i>安全</i><p>专业清洁消毒处理</p></li>
        <li><i>省心</i><p>专业物流配送安装</p></li>
        <li><i>快捷</i><p>24小时内送货</p></li>
    </ul>
</div>
<!--footer信息-->
<div class="footer_info dpi-1260 clearfix">
    <!--第一列-->
    <div class="footer_info-content fl">
        <h2>关于我们</h2>
        <p>
            <a href="#">关于户里</a><a href="#">注册协议</a>
        </p>
        <p><a href="#">业务合作</a><a href="#">免责声明</a></p>
        <p><a href="#">加入户里</a><a href="#">隐私保护</a></p>
    </div>
    <!--第二列-->
    <div class="footer_info-content fl">
        <h2>流程指南</h2>
        <p>
            <a href="#">购买家具</a><a href="#">出售家具</a>
        </p>
        <p><a href="#">支付方式</a><a href="#">配送安装</a></p>
        <p><a href="#">售后保障</a></p>
    </div>
    <!--第三列-->
    <div class="footer_info-content fl">
        <h2>会员中心</h2>
        <p>
            <a href="#">会员计划</a>
        </p>
        <p><a href="#">积分规则</a></p>
        <p><a href="#">投诉建议</a></p>
    </div>
    <!--第四列-->
    <div class="footer_info-content fl">
        <h2>联系客服</h2>
        <p class="h-14">
            <span>电话：</span><br>
            <span>028-67635052</span>
        </p>
        <p class="h-14">
            <span>邮箱：</span><br>
            <span>hello@hulihome.com</span>
        </p>
    </div>
    <!--第五列-->
    <div class="footer_info-content fl">
        <p><i class="sprit sina_logo-small"></i>
            <span>新浪微博@户里网</span>
        </p>
        <div class="sina_rqcode-small sprit"></div>
    </div>
    <!--第六列-->
    <div class="footer_info-content fl addBorder">
        <p><i class="sprit weixin_logo-small"></i>
            <span>关注微信“户里网”</span>
        </p>
        <div class="sina_rqcode-small sprit"></div>
    </div>
</div>
<!--网站备案信息-->
<div class="footer_copyright">蜀ICP备15028224号  成都户里科技有限公司</div>`)
}

/********************
 * 页面加载完成执行
 * ************************/

$(function () {
    //导航栏点击时请求单页面
    $(".header").on("click",".main_nav>div>ul>li",function () {
        //获取点击的li中的第一个字符
        var  anchorTxt = $(this).children("a").text().slice(0,1);
        //根据点击的内容调用函数
        switch (anchorTxt){
            case "沙":
                loadMain("sofas","沙发");
                break;
            case "桌":
                loadMain("tables","桌/椅");
                break;
            case "床":
                loadMain("beds","床");
                break;
            case "柜":
                loadMain("storage","柜子");
                break;
            case "更":
                loadMain("more","更多");
                break;
            default:
                console.log("no");
        }

    })
})

/*
*功能：单页面加载函数
* @param pageName    页面的名字（index）
* @param Name    页面导航栏显示的标题
*
* */
function loadMain(pageName,Name) {
    console.log(window.name);
    //如果不是在主页点击
    if(window.name!=="index"){
            //通过点击来判断对应的html加载
            $.post(pageName+".html",function (data) {
                //将html页面中的内容添加到主页面的main标签内
                $("#main").html(data);
                //获取html页面中的js内容
                $.getScript("../js/Commodity.js");
            })
        //设置浏览器地址栏里的名字
        $("head title").text("商品分类--"+Name);

    }
    //如果是在主页面点击导航栏
    else{
            //通过点击来判断对应的html加载
            $.post("pages/"+pageName+".html",function (data) {
                //将html页面中的内容添加到主页面的main标签内
                $("#main").html(data);
                //获取html页面中的js内容
                $.getScript("js/Commodity.js");
            })
        ////设置浏览器地址栏里的名字
        $("head title").text("商品分类--"+Name);
    }
}



/*
*功能：跳转地址拼接函数
* @param route:页面名字（pages/beds.html）
*
* */
function jump(route) {
    var basePath='';
    if(window.name !=="index"){
        basePath="../";
    }
    return basePath+route;
}






