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
      
      //login登陆
      $(".diandl").click(function(){
        $(".dendl").css("display","block")
        $(".dendlbj").css("display","block")
      })
      $(".close").click(function(){
        $(".dendl").css("display","none")
        $(".dendlbj").css("display","none")
      })

      // content.focus焦点图
  		var nowimg=0;
      var timer=null;
  		// 克隆第一张图片，并且放到最后
  		$(".pic li:first").clone().appendTo('.pic')
          // 小圆点业务
  		$(".square span").click(function(){
             nowimg=$(this).index()
             $(".square span").eq(nowimg).addClass('curent').siblings().removeClass('curent')
             $(".pic ").animate({"left":nowimg*-650}, 1000)
          });
          function rightFunc(){
  			
  			if(nowimg<2){
  				nowimg++
  				$(".pic").animate({"left":nowimg*-650},1000)
  				 $(".square span").eq(nowimg).addClass('curent').siblings().removeClass('curent')
  			}else{
  				nowimg=0
  				$(".pic").animate({"left":3*-650},1000,function(){
  					$(".pic").css("left",0)

  				})
  			}
  		}

      // 自动轮播
      timer=setInterval(rightFunc,2000)
      
      $(".shuffling").mouseenter(function(){
      	clearInterval(timer)
      })
      $(".shuffling").mouseout(function(){
      	clearInterval(timer)
      	timer=setInterval(rightFunc,2000)
      }) 
      //reclist焦点图2 
      $(".piclist").find("li:lt(3)").clone().appendTo('.piclist');
      //小圆点业务
      var ge=0;
      var no=null;
      $(".circle span").click(function(){
      	ge=$(this).index()
      	$(".circle span").eq(ge).addClass('cu').siblings().removeClass('cu');
      	$(".piclist").animate({"left":ge*-672},1000)
      })
      function huan(){
        	if(ge<3){
        		ge++
        		$(".piclist").animate({"left":ge*-672},1000)
            $(".circle span").eq(ge).addClass('cu').siblings().removeClass('cu');

        		}else{
        			ge=0;
        			$(".piclist").animate({"left":4*-672},1000,function(){
        				$(".piclist").css("left",0)
                $(".circle span").eq(ge).addClass('cu').siblings().removeClass('cu');
        			})
        	}

      }
      
     // 自动轮播
      no =setInterval(huan,2000)
      $(".loop").mouseenter(function(){
     	  clearInterval(no)
      })
      $(".loop").mouseout(function(){
     	  clearInterval(no)
     	  no =setInterval(huan,2000)
      })

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

   
        
})

