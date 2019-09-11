var x = false;
var y = false;
var z = false;
var w = false;
var a = document.getElementById("user");
var b = document.getElementById("pass");
var c = document.getElementById("land");
var d = document.getElementById("che");
c.onclick = function(){
  var poss = JSON.parse(localStorage.getItem("pos"))
  var arr = [];
  for(var i in poss){
    arr.push(poss[i])    
  } 
  a.value == arr[0] ? x=true : x=false ;
  a.value == arr[1] ? y=true : y=false ;
  b.value == arr[2] ? z=true : z=false ;
  d.checked == true ? w=true : w=false ;
  if((x || y)&&z&&w){
    window.location.href = "index.html"
  }else{
    alert("用户名或密码错误")
  } 
}