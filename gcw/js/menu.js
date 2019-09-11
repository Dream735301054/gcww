
setInterval(()=>{
  $("nav").find(".l").children("ul").hover(function(){
        $(this).children("li").children("ul").stop().show();    
      },function(){
        $(this).children("li").children("ul").stop().hide();
      }).children("li").children("ul").children("li").hover(function(){
          $(this).children("dl").stop().show();
          },function(){
            $(this).children("dl").stop().hide();            
          },)
},)

    
