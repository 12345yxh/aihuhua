$(document).ready(function(){
     //navigation下拉
      $(".navigation .title").mouseenter(function(){
          //标题添加颜色
          $(".navigation .title").removeClass('haha').children().removeClass('zhuan')
          $(this).addClass('haha').children().addClass('zhuan')
         //显示下拉
           $(".navigation .catelist").hide()
          $(this).siblings(".navigation .catelist").show()

      })
      $(".navigation .cate").mouseleave(function(){
         $(".navigation .title").removeClass('haha').children().removeClass('zhuan')
          $(this).removeClass('haha').children().removeClass('zhuan')
          $(".navigation .catelist").hide()
          $(this).siblings(".navigation .catelist").hide()
      })
      
      //显示消失
      $(".pic_item").mouseenter(function(){
         $(this).children().children().children('.mask').slideDown(100)
        
      })
      $(".pic_item").mouseleave(function(){
          $(this).children().children().children('.mask').slideUp(100)
      })
      //换颜色
      $(".btn-cancel").mouseenter(function(){
          $(this).addClass("btn-cancelbj").children().css("color","#ffffff").children().css("background","url(./images/add.png) no-repeat 0 -72px")
      })
       $(".btn-cancel").mouseleave(function(){
          $(this).removeClass("btn-cancelbj").children().css("color","#999").children().css("background","url(./images/add.png) no-repeat 0 -55px")
      })
      //login登陆
      $(".diandl").click(function(){
        $(".dendl").css("display","block")
        $(".dendlbj").css("display","block")
      })
      $(".close").click(function(){
        $(".dendl").css("display","none")
        $(".dendlbj").css("display","none")
      })
       //listing点击关注弹框
      $(".btn-cancel").click(function(){
          $(".kuangk").css("display","block")
          $(".bjs").css("display","block")
          
      })
     setInterval(function(){
          $(".kuangk").css("display","none")
          $(".bjs").css("display","none")
        },2000)


      //返回顶部
      $(window).scroll(function() {
        if($(window).scrollTop()>100){
              $(".top_stick").fadeIn(1000);
          }else{
              $(".top_stick").fadeOut(1000);
          }
      });
      $(".top_stick").click(function() {
            $("body,html").animate({"scrollTop":0}, 1000)
        });


      //celal侧滑
      $(".cela").mouseenter(function(){
        $(".tupianz").css("display","block")
        $(".laz1").addClass("laz11")
      })
      $(".celal").mouseleave(function(){
         $(".tupianz").css("display","none")
         $(".laz1").removeClass("laz11")
      })
      $(window).scroll(function() {
        if($(window).scrollTop()<4000){
              $(".tupianz").css("display","none")
              $(".laz1").addClass("laz11")
          }else{
              $(".tupianz").css("display","block")
              $(".laz1").removeClass("laz11")
          }
      });

})

