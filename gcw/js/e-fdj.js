window.onload = function(){
 var smallObj = document.getElementsByClassName('small')[0];
    var moveObj = document.getElementsByClassName('move')[0];
    var bigObj  = document.getElementsByClassName('big')[0];
    var girlObj  =  document.getElementsByClassName('look_girl')[0]; 
    // 2 给sall绑定鼠标移动事件
      smallObj.onmousemove = function(eve){
          var e = eve || window.event;
           // 3 获取鼠标的实时位置
          var x = e.clientX;
          var y = e.clientY;
          // 4计算move的left和top    
          var moveLeft = x-this.offsetLeft-moveObj.offsetWidth/2;
          var moveTop = y-this.offsetTop-moveObj.offsetHeight/2;
          
             //5 设置move的移动边界
          if(moveTop<0) moveTop = 0;
             //设置左边距
          if(moveLeft<0) moveLeft = 0;
            // 设置右边
          if(moveLeft>this.offsetWidth-moveObj.offsetWidth) moveLeft = this.offsetWidth-moveObj.offsetWidth;
            // 设置最大下边距
          if(moveTop>this.offsetHeight-moveObj.offsetHeight) moveTop = this.offsetHeight-moveObj.offsetHeight; 
           // 设置move的实时的位置
          moveObj.style.left = moveLeft + 'px';
          moveObj.style.top = moveTop + 'px';
           //让滑块显示出来
          moveObj.style.display = 'block';
          
          /*********让大图显示出来*********/
          bigObj.style.display = 'block';
          // 1 设置大图的left top位置
          bigObj.style.left = this.offsetLeft + this.offsetWidth + 'px';
          bigObj.style.top = this.offsetTop + 'px';
    
          //       距离左边left    图片宽度           盒子宽度          距离左边left    图片宽度           盒子宽度
          //  big_x/(look_girl.offsetWidth-big.offsetWidth) = move_left/(small.offsetWidth-move.offsetWidth);
          var girlL = moveLeft/(smallObj.offsetWidth-moveObj.offsetWidth)*-(girlObj.offsetWidth-bigObj.offsetWidth);
          var girlT = moveTop/(smallObj.offsetHeight-moveObj.offsetHeight)*-(girlObj.offsetHeight-bigObj.offsetHeight);
            //2 给图片设置位置
          girlObj.style.left = girlL+'px';
          girlObj.style.top = girlT+'px';
    
         
           
      }
    
        /*********鼠标移走之后,让大图和滑块消失*********/ 
       smallObj.onmouseleave = function(){
           moveObj.style.display = 'none';
           bigObj.style.display = 'none';
           
       }
    
        smallObj.onmouseleave = function(){
             moveObj.style.display = 'none';
             bigObj.style.display = 'none';
        }

    }
      
      
 
 
  