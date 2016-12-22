/**
 * Created by MM on 2016/10/30.
 */
/*banner轮播*/
$(function(){
    var $Banner=$(".banner");
    var $Lbpic=$(".lbpic");
    var $Li=$(".lbpic li");
    var $page=$(".page-con li");
    var page=0;
    var timer=null;
    $Li.eq(0).css("display","block");
    $page.eq(0).css("background","#ffff00");
    function slide(){
        for(var i=0;i<$Li.length;i++){
            $Li.eq(i).css("display","none");
            $page.eq(i).css("background","#555555");
        }
        $Li.eq(page).css("display","block");
        $page.eq(page).css("background","#ffff00");
        page++;
        if(page==$Li.length){
            page=0;
        }
    }
    timer=setInterval(slide,1500);
    $Banner.mouseover(function(){
        clearInterval(timer);
    }).mouseout(function(){
        timer=setInterval(slide,1500);
    });
    $page.mouseover(function(){
        page=$page.index(this);
        for(var i=0;i<$Li.length;i++){
            $Li.eq(i).css("display","none");
            $page.eq(i).css("background","#ffff00").siblings().css("background","#555555");
        }
        $Li.eq(page).css("display","block");
        $page.eq(page).css("background","#ffff00").siblings().css("background","#555555");
    })


});
/*小轮播*/
$(function(){
    var timeCount=null;
    var $Focus=$(".focus");
    var $imgLi=$(".slide li");
    var $pageLi=$(".page-pointer li");
    var index=0;
    $imgLi.eq(0).css("display","block");
    $pageLi.eq(0).css("background","#ffc100");
    function Lbpic(){
        for(var i=0;i<$imgLi.length;i++){
            $imgLi.eq(i).css("display","none");
            $pageLi.eq(i).css("background","#e3e3e3");
        }
        $imgLi.eq(index).css("display","block");
        $pageLi.eq(index).css("background","#ffc100");
        index++;
        if(index==$imgLi.length){
            index=0;
        }
    }
    timeCount=setInterval(Lbpic,2000);
    $Focus.mouseover(function(){
        clearInterval(timeCount);
    }).mouseout(function(){
        timeCount=setInterval(Lbpic,2000);
    });
    $pageLi.mouseover(function(){
        index=$pageLi.index(this);
        for(var i=0;i<$imgLi.length;i++){
            $imgLi.eq(i).css("display","none");
            $pageLi.eq(i).css("background","#e3e3e3");
        }
        $imgLi.eq(index).css("display","block");
        $pageLi.eq(index).css("background","#ffc100").siblings().css("background","#e3e3e3");
    })
});

