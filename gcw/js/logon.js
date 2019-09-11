var ouser = document.getElementById("user");
var opass = document.getElementById("pass");
var oema = document.getElementById("ema");
var opass2 = document.getElementById("pass2");
var obtn = document.getElementById("btn");
var q1 = document.querySelector(".q1")
var q2 = document.querySelector(".q2")
var q3 = document.querySelector(".q3")
var g = document.getElementById("che")
//		每个输入框的状态:成功/失败，初始为失败
var x = false;
var y = false;
var z = false;
var w = false;

ouser.onblur = function(){
    //用户名的正则
    var reg = /^[\w\-\u2E80-\u9FFF]{4,20}$/
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "可以使用";
        x = true
    }else{
        this.nextElementSibling.innerHTML = "不符合规则，请输入中文、字母、数字、“-”“_”的组合，4-20个字符";
        x = false
    }
}

opass.onblur = function(){
    if(this.value != opass2.value && opass2.value != ""){
        opass2.nextElementSibling.innerHTML = "两次不一致";
        z = false
    }
    
    if(this.value.length>=6 && this.value.length<=20){
//				三种情况的开关的定义，出现了一种就对应的改成1
        var a = 0;
        var b = 0;
        var c = 0;
        //是否出现数字的正则
        var numReg = /\d+/g;
        a = numReg.test(this.value) ? 1 : 0;            
        //是否出现字母的正则
        var azReg = /[a-zA-Z]+/g;
        b = azReg.test(this.value) ? 1 : 0;            
        //是否出现特殊的正则
        var tsReg = /[^a-zA-Z0-9]+/g;
        c = tsReg.test(this.value) ? 1 : 0;            
//				三种情况都判断之后,验证开关的结果
        var str = ""
        switch(a+b+c){
            case 1:
                q1.style.background = "";
                q2.style.background = "";
                q3.style.background = "";
                q1.style.background = "red";
                break;
            case 2:
                q1.style.background = "";
                q2.style.background = "";
                q3.style.background = "";
                q2.style.background = "yellow";
                break;
            case 3:
                q1.style.background = "";
                q2.style.background = "";
                q3.style.background = "";
                q3.style.background = "green";
                break;
        }
        this.nextElementSibling.innerHTML = str;
        y = true;
    }else{
        this.nextElementSibling.innerHTML = "长度不符合";
        q1.style.background = "";
        q2.style.background = "";
        q3.style.background = "";
        y = false
    }
}    
oema.onblur = function(){
    //用户名的正则
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "可以使用";
        w = true
    }else{
        this.nextElementSibling.innerHTML = "邮箱格式不正确，请重新输入！";
        w = false
    }
}
opass2.onblur = function(){
    if(this.value == opass.value){
        this.nextElementSibling.innerHTML = "一致";
        z = true
    }else{
        this.nextElementSibling.innerHTML = "两次不一致";
        z = false
    }
}

//		判断所有输入框的状态
obtn.onclick = function(){
    var v = g.checked
    if(x&&y&&z&&w&&v){        
       var pos = {
         ouser:ouser.value,
         oema:oema.value,
         opass:opass.value,
       }    
       localStorage.setItem("pos",JSON.stringify(pos))
      window.location.href = "http://localhost/1907/gcw/land.html"     
    }else{
        alert("提交失败")
    }
}
