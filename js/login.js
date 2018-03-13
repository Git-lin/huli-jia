
    window.name="login";
    addHeader();
    addFooter();


    /*注册按钮的点击事件*/
    $("#main").on("click",".subhead .register",function(){
        window.location.href="register.html";
    })
    //登录按钮的点击事件
    $("#main").on("click",".subhead .login",function(){
        window.location.href="login.html";
    })
    $(".header").on("click",".loginOrShop .login",function (e) {
        window.location.href="login.html";
    })

    //logo的点击事件
    $(".header").on("click",".logo a",function () {
        window.location.href="../index.html";
    })

    //邮箱验证
    $("#main").on("blur",".userName",function () {
        var regs=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if(regs.test($(this).val())){
            $(".Prompt-accounts").css("opacity","0");
        }
        else{
            $(".Prompt-accounts").css("opacity","1");
        }
    })

    //密码验证
    $("#main").on("blur",".userPwd",function () {
        var regs=/^[a-zA-Z]\w{5,17}$/;
        if(regs.test($(this).val())){
            $(".Prompt-pwd").css("opacity","0");
        }
        else{
            $(".Prompt-pwd").css("opacity","1");
            $(".Prompt-pwd").val("");
        }
    })

    //确认密码验证
    $("#main").on("blur",".userPwd2",function(){
        if($(".userPwd").val()!==$(this).val()){
            $(".confirm").css("opacity","1");
            $(this).val("");
        }
        else{
            $(".confirm").css("opacity","0");
        }
    })

    //验证码验证
    $("#main").on("blur",".Verification-input",function () {
        var str='';
        //获取验证码的值
        var $item=$(".Verification").children(),
            $item_len=$item.length;
        for(var i=0;i<$item_len;i++){
            str+=$item[i].textContent;
        }
        if(str !==$(this).val()){
            $(".request-account").css("opacity","1");
            $(this).val("");
        }
        else{
            $(".request-account").css("opacity","0");
        }
    })

    //自动生成验证码
    random();
    function random(){
        random_char(5);
    }

    //点击图片验证码进行更换
    $("#main").on("click",".Verification",function () {
        random_char(5);
    })

    //生成验证码函数
    function random_char(length){
        var $item=$(".Verification").children();
        var strCode="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var str_length=strCode.length;
        for(var i=0;i<length;i++){
            $item.eq(i).text("");
            var rand=Math.floor(Math.random()*str_length);
            $item.eq(i).text(strCode.charAt(rand));
        }

    }

    //鼠标移入时判断按钮的状态
    $("#main").on("mouseenter",".Btn",function () {
        statusSet();
    })

    //判断点击事件的状态
    function statusSet(){
    var inputAll=$("#main form[name=register-form] input");
    console.log(inputAll);
    for(var i=0;i<inputAll.length;i++){
        if(inputAll[i].value===''){
            $(".Btn").css({
                "cursor":"not-allowed",
                "background-color":"#999",
            }).prop("disabled",true);
            return;
        }
    }
        $(".Btn").css({
            "cursor":"pointer",
            "background-color":"#82c353",
        }).prop("disabled",false);

    }

    //提交按钮的点击事件
    $("#main").on("click",".regBtn",function(){
        if($(".regBtn").css("cursor")==="pointer"){
            //存储用户信息对象
            var user={
                "username":$(".userName").val(),
                "password":$(".userPwd").val(),
            };
            //判断用户是否存在
            judge("users","username",$(".userName").val(),function (status) {
                //如果存在清空input的值，并弹出提示对话框
                if(status===0){
                    /*alert("用户已经存在！");*/
                    $('.mask .maskcontent p').text("用户已经存在！");
                    $('.mask').css('display','block');
                    //点击确认后。隐藏遮罩层
                    $('.maskcontent>button').on('click',function () {
                        $('.mask').css('display','none');
                        $(".userName").val("");
                        $(".userPwd").val("");
                        $(".userPwd2").val("");
                        $(".Verification-input").val("");
                    });

                }
                else if(status===1){
                    //如果不存在就将数据添加到users中
                    addUser("users",user,function () {
                        //arr保存用户名
                        var arr='';
                        arr=$(".userName").val().split("@")[0];
                        localStorage.setItem("current",arr);
                       /* alert("恭喜"+arr+"注册成功,去登录吧！");*/
                        $('.mask .maskcontent p').text("注册成功,去登录吧！！");
                        $('.mask').css('display','block');
                        //点击确认后。隐藏遮罩层
                        $('.maskcontent>button').on('click',function () {
                            $('.mask').css('display','none');
                            $("#main .subhead .login").trigger("click");
                        });


                    })
                }
            })


        }
    })

    //登录按钮的点击事件
    $("#main").on("click",".loginBtn",function () {
        if($(".loginBtn").css("cursor")==="pointer"){
            login();
        }
    })



//判断登录是否成功
function login(){
    //获取账号密码的值
    var $email=$(".userName").val();
    var $pwd=$(".userPwd").val();
    if(localStorage["users"]){
        var user=JSON.parse(localStorage["users"]),
            user_leng=user.length;
    }
    //查找状态：找到：true，未找到false
    var searchStatus=false;
    //遍历进行用户名对比
    for(var i=0;i<user_leng;i++){
        //判断用户是否存在
        if(user[i].username===$email){
            searchStatus=true;
            break;
        }
    }
    //判断是否和本地存储的值一样
    if(searchStatus && user[i].password===$pwd){
        var arr='';
        arr=$email.split("@")[0];
        //存储当前登录的用户，用于在页面显示
        localStorage.setItem("current",arr);
        /*alert("恭喜"+arr+"登录成功");*/
        $('.mask').css('display','block');
        //加载主页面
        //点击确认后。隐藏遮罩层
        $('.maskcontent>button').on('click',function () {
            $('.mask').css('display','none');
            window.location.href="../index.html";
        });



    }
    else{
        /*alert("您尚未注册，请注册后再登录！");*/
        $('.mask .maskcontent p').text("您尚未注册，请注册后再登录！！");
        $('.mask').css('display','block');
        //点击确认后。隐藏遮罩层
        $('.maskcontent>button').on('click',function () {
            window.location.href="register.html";
        });


    }

}


    /*
    * 判断用户是否存在
    * @param key   存储用户信息在本地的键名
    * @param gist   存储用户存在的依据
    * @param  value  用户输入的值
    * @param response 用户存在与否的标志（0：存在，1：不存在）
    *
    * */
function judge(key,gist,value,response) {
    //如果存在
    if(!localStorage[key]){
        response(1);
        return;
    }
    //获取本地数据集合，转换为json对象
    var users=JSON.parse(localStorage[key]);
    console.log(users);
    //遍历本地数据集合，判断用户是否存在
    var tag=false;
    for(var i=0;i<users.length;i++){
        if(users[i][gist]===value){
            tag=true;
        }
    }
    tag?response(0):response(1);

}


/*
* 本地存储：添加用户
* @param key ：存储用户的键名
* @param user :用户信息
* @param callBack 存储成功回调函数
*
* */
function addUser(key,user,callBack) {
    //定义存储用户信息的集合
    var users=null;
    //判断本地是否已经存在该数据集合
    if(localStorage[key]){
        //存在，初始化users
        users=JSON.parse(localStorage[key]);
    }
    else{
        //不存在
        users=[];
    }
    //添加用户
    users.push(user);
    //更新本地数据
    localStorage[key]=JSON.stringify(users);
    //数据存储成功后调用回调函数
    if(callBack){
        callBack();
    }
}