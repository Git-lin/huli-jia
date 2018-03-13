
/****************************
 **功能：加载header footer
 ****************************/
$(function () {
    window.name="shopCar";
    addHeader();
    addFooter();
});



/****************************
 **功能：实现全选，半选，不选功能
 ****************************/

/**
 * 功能：自定义复选框功能
 * 参数：1.子复选框标识符；2.全选框标识符；3.子复选框的遍历范围元素；4.全选框的遍历范围元素
 **/
function checkbox_custom(ckb_child, ckb_all, ckb_range, ckb_all_range) {
    /* 子复选框点击功能 */
    $(document).on("click", ckb_child, function() {
        var ckd_none = $(this).hasClass("ckb_custom");
        // 当未选中时使之选中
        if(ckd_none) {
            $(this).removeClass("ckb_custom").addClass("ckb-checked_custom");
            $(this).siblings("input[type='checkbox']").prop("checked", true);

            // 获得子复选框的个数和未选中个数
            var cld_count = $(ckb_range).find(ckb_child).length,
                cld_none_count = $(ckb_range).find(".ckb_custom").length;


            // 如果全部选中
            if(cld_none_count == 0) {
                // 全选框设为选中状态
                $(ckb_all).removeClass("ckb_custom ckb-part_custom").addClass("ckb-checked_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 如果只是选中部分
            else {
                // 全选框设为部分选中状态
                $(ckb_all).removeClass("ckb_custom ckb-checked_custom").addClass("ckb-part_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
        }
        // 否则取消选中效果
        else {
            $(this).removeClass("ckb-checked_custom ckb-part_custom").addClass("ckb_custom");
            $(this).siblings("input[type='checkbox']").prop("checked", false);

            // 获得子复选框的个数和未选中个数
            var cld_count = $(ckb_range).find(ckb_child).length,
                cld_none_count = $(ckb_range).find(".ckb_custom").length;

            // 如果只是选中部分
            if(cld_count != cld_none_count && cld_none_count != 0) {
                // 全选框设为部分选中状态
                $(ckb_all).removeClass("ckb_custom ckb-checked_custom").addClass("ckb-part_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 如果全未选中
            else {
                // 全选框设为初始状态
                $(ckb_all).removeClass("ckb-part_custom ckb-checked_custom").addClass("ckb_custom");
                $(ckb_all).siblings("input[type='checkbox']").prop("checked", false);
            }
        }
        //获取选择的商品个数
        var  cld_all_count = $(ckb_range).find(".ckb-checked_custom").length;
        //下面的商品金额动态改变
        $('.trea_count_sum').text(cld_all_count);
        //根据被勾选的数量。计算结算的金额
        //获取被勾选的选项的金额
        var checkprice = $(ckb_range).find('.ckb-checked_custom').parent().parent().find('.Allunitprice').find('span');
        console.log(checkprice);
        //通过push到数组里，求出总金额
        var sum1 = 0;
        var arr1 = [];
        for (var a=0;a<cld_all_count;a++){
            arr1.push(checkprice.eq(a).text());
        }
        console.log(arr1);
        arr1.forEach(function (ele) {
            sum1 += Number(ele);
        });
        $('.monney>span').text(sum1);
    });

    /* 全选复选框点击功能 */
    $(document).on("click", ckb_all, function() {
        var ckb = $(ckb_all_range).find(ckb_child),
            ckb_len = ckb.length,
            ckb_none = $(ckb_all_range).find(ckb_child + ".ckb_custom" + '.sprit'),
            ckb_none_len = ckb_none.length,
            allCkd = !(ckb_none_len == 0),
            ckb_all_len = $(ckb_all).length;

        // 如果未全选中
        if(allCkd) {
            // 将子复选框全部选中
            for(var i = 0; i < ckb_len; i++) {
                ckb.eq(i).removeClass("ckb_custom").addClass("ckb-checked_custom");
                ckb.eq(i).siblings("input[type='checkbox']").prop("checked", true);
            }
            // 将全选框选中
            $(ckb_all).removeClass("ckb_custom ckb-part_custom").addClass("ckb-checked_custom");
            $(ckb_all).siblings("input[type='checkbox']").prop("checked", true);
        }
        // 如果已全选中
        else {
            // 取消所有选中状态
            for(var i = 0; i < ckb_len; i++) {
                ckb.eq(i).removeClass("ckb-checked_custom ckb-part_custom").addClass("ckb_custom");
                ckb.eq(i).siblings("input[type='checkbox']").prop("checked", false);
            }
            // 取消全选状态
            $(ckb_all).removeClass("ckb-part_custom ckb-checked_custom").addClass("ckb_custom");
            $(ckb_all).siblings("input[type='checkbox']").prop("checked", false);
        }

        //获取选择的商品个数
        var  cld_all_count = $(ckb_range).find(".ckb-checked_custom").length;
        //下面的商品金额动态改变
        $('.trea_count_sum').text(cld_all_count);
        //根据被勾选的数量。计算结算的金额
        //获取被勾选的选项的金额
        var checkprice = $(ckb_range).find('.ckb-checked_custom').parent().parent().find('.Allunitprice').find('span');
        console.log(checkprice);
        //通过push到数组里，求出总金额
        var sum1 = 0;
        var arr1 = [];
        for (var a=0;a<cld_all_count;a++){
            arr1.push(checkprice.eq(a).text());
        }
        console.log(arr1);
        arr1.forEach(function (ele) {
            sum1 += Number(ele);
        });
        $('.monney>span').text(sum1);

    });

}

/* 自定义复选框功能 */
checkbox_custom(".i_trea", ".allCkd", "tbody", ".sc-content");

/*****************************************************
 *功能：实现购物车数量的加减功能和计算商品总金额功能
 *****************************************************/

//获取减号按钮，加号按钮
var sub = $('.trea_count input').prev();
var add = $('.trea_count input').next();

//点击减号按钮实现减法功能
sub.on('click',function () {
    //获取当前商品数量
    var inpVal = $(this).next().val();
    //商品减后的数量
    var goodscount =  inpVal -1;
   // 如果值大于1执行减法
    if (inpVal >= 2){
        $(this).next().val(goodscount);
        if (goodscount <= 1){
            $(this).removeClass('active');
        }
    }
    //如果值小于等于1禁用减号按钮
    else if(goodscount <= 1){
        $(this).removeClass('active');
    }
    console.log(inpVal);
    console.log(goodscount);

    //调用计算总金额函数
    //获取单价
    var unitprice = Number($(this).parent().prev().children('span').text());
    //商品数量
    var goodscount =  inpVal -1;
    //计算金额
    var Allunitprices = goodscount * unitprice;
    //总金额等于单价乘以数量
    $(this).parent().next().children('span').text(Allunitprices);
    //计算结算时候的总金额
    var sum = 0;
    var arr = [];
    var spanleng =  $('.Allunitprice>span').length;
    for (var i = 0;i<spanleng;i++){
        arr.push($('.Allunitprice>span').eq(i).text()) ;
    }
    arr.forEach(function (ele) {
        sum += Number(ele);
    });
    $('.monney>span').text(sum);

});
//点击加号按钮实现加法功能
add.on('click',function () {
    //获取商品数量
    var inpVal = Number($(this).prev().val());
    //实现加号功能
    $(this).prev().val(inpVal + 1);
    //当值大于1时，不禁用减号按钮
    if (inpVal >= 1){
        $(this).prev().prev().addClass('active');
    }
    //调用计算总金额函数
    //获取单价
    var unitprice = Number($(this).parent().prev().children('span').text());
    //获取数量
    var goodscount = inpVal + 1;
    //计算金额
    var Allunitprices = goodscount * unitprice;
    //总金额等于单价乘以数量
    $(this).parent().next().children('span').text(Allunitprices);
    //计算结算时候的总金额
    var sum = 0;
    var arr = [];
    var spanleng =  $('.Allunitprice>span').length;
    for (var i = 0;i<spanleng;i++){
       arr.push($('.Allunitprice>span').eq(i).text()) ;
    }
    arr.forEach(function (ele) {
        sum += Number(ele);
    });
   $('.monney>span').text(sum);

});


/*********************************************************************
*功能：实现删除选项功能,并根据动态删除的数量，改变对应的总商品数和总金额
*********************************************************************/
$('.del>a').on('click',function () {
    $(this).parent().parent().remove();
   //删除后的值要进行改变（商品数量变化和总金额）
    //删除后商品数量变化
    var goodscountleng = $('tbody i.sprit').length;
    console.log(goodscountleng);
    $('.sc-payBar-left .trea_count_sum').text(goodscountleng);
    //删除后总金额变化
    //当前总金额
    var tottal = $('span.monney>span').text();
    console.log(tottal);
    //减去的商品的金额
    var subVal = $(this).parent().prev().children('span').text();
    console.log(subVal);
    //减去后的金额
    var nowVal = tottal - subVal;
    $('span.monney>span').text(nowVal);

});
//点击结算时。弹出遮罩层，点击确定按钮，隐藏遮罩层
$('.gotoPay').on('click',function () {
    $('.mask').css('display','block');
});
//点击确认后。隐藏遮罩层
$('.maskcontent>button').on('click',function () {
    $('.mask').css('display','none');
});
