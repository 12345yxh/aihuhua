$(document).ready(function(){
    //快捷
    $(".kuaijie li").mouseenter(function(){
    	$(".kuaijie span").css({"background":"url(images/sanjiao.gif)-30px 0px"});
    	$(".yhrj").css("display","block");   
    })
    $(".kuaijie li").mouseleave(function(){
    	$(".kuaijie span").css({"background":"url(images/sanjiao.gif)-30px -15px"})
        $(".yhrj").css("display","none");
    })
    //页头 特色6个
    $(".tese1").mouseenter(function(){
    	$(".tese1 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese1-helantie").css("display","block");   
    })
    $(".tese1").mouseleave(function(){
    	$(".tese1 span").css({"background":"url(images/sanjiao.gif)-30px -15px"}); 
    	$(".tese1-helantie").css("display","none"); 
    })

    $(".tese2").mouseenter(function(){
    	$(".tese2 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese2-quweilei").css("display","block");    
    })
    $(".tese2").mouseleave(function(){
    	$(".tese2 span").css({"background":"url(images/sanjiao.gif)-30px -15px"}); 
    	$(".tese2-quweilei").css("display","none");
    })

    $(".tese3").mouseenter(function(){
    	$(".tese3 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese3-guanshang").css("display","block");   
    })
    $(".tese3").mouseleave(function(){
    	$(".tese3 span").css({"background":"url(images/sanjiao.gif)-30px -15px"});
    	$(".tese3-guanshang").css("display","none"); 
    })

    $(".tese4").mouseenter(function(){
    	$(".tese4 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese4-yangtai").css("display","block");   
    })
    $(".tese4").mouseleave(function(){
    	$(".tese4 span").css({"background":"url(images/sanjiao.gif)-30px -15px"}); 
    	$(".tese4-yangtai").css("display","none");
    })

    $(".tese5").mouseenter(function(){
    	$(".tese5 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese5-chunji").css("display","block");   
    })
    $(".tese5").mouseleave(function(){
    	$(".tese5 span").css({"background":"url(images/sanjiao.gif)-30px -15px"});
    	$(".tese5-chunji").css("display","none"); 
    })

    $(".tese6").mouseenter(function(){
    	$(".tese6 span").css({"background":"url(images/sanjiao.gif)-30px 0px"}); 
    	$(".tese6-yangzhi").css("display","block");   
    })
    $(".tese6").mouseleave(function(){
    	$(".tese6 span").css({"background":"url(images/sanjiao.gif)-30px -15px"});
    	$(".tese6-yangzhi").css("display","none"); 
    })
    //main 页面整体分类 左边
    $(".main-left-five li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(".main-left-five li i").parent().siblings().children().removeClass('arrow-in');
        $(".main-left-five li i").eq($(this).index()).addClass('arrow-in');
        $(".main-left-list ul").eq($(this).index()).addClass('list-on').siblings().removeClass('list-on');
    })
    //main 页面整体分类 右边轮播
    var nowimg=0;
    var timer=null;
    $(".main-lunboin li:first").clone().appendTo('.main-lunboin');
    function rightFunc(){ 
        if(nowimg<2){
            nowimg++
            $(".main-lunboin").animate({"left":nowimg*-535},1000)
        }else{
            nowimg=0
            $(".main-lunboin").animate({"left":3*-535},1000,function(){
                $(".main-lunboin").css("left",0)
            })
        }
        $(".circle span").eq(nowimg).addClass('circle-current').siblings().removeClass('circle-current')  
    }
    $(".circle span").click(function(){
         nowimg=$(this).index()
         $(".circle span").eq(nowimg).addClass('circle-current').siblings().removeClass('circle-current')
         $(".main-lunboin").animate({"left":nowimg*-535}, 1000)
    });
    timer=setInterval(rightFunc,2000)      
    $(".main-right-lunbo").mouseenter(function(){
        clearInterval(timer)
    })
    $(".main-right-lunbo").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })
    // 回到顶部
    $(window).scroll(function(){
            if($(window).scrollTop()>100){
                $(".huidaodingbu").fadeIn(1000);
            }else{
                $(".huidaodingbu").fadeOut(1000);
            }
        });
    $(".huidaodingbu").click(function(){
        $('body,html').animate({"scrollTop":"0px"},1000);
    })
    //登录界面
    $(".nav5-denglu").click(function(){
        $(".huisebox").css("display","block");
        $(".denglujiemian").css("display","block");
    })
    $(".denglujiemian-header span").click(function(){
        $(".huisebox").css("display","none");
        $(".denglujiemian").css("display","none");
    })

    

})  