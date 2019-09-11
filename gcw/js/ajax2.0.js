function ajax(options){
    let {type,url,success,error,data,timeout} = options;
    type = type || 'get';
    data = data || {};
    timeout = timeout || 500;
    var str = '';
    for(var i in data){
        str += `${i}=${data[i]}&`; 
    }
    if(type=='get' || type=='jsonp'){
        var d = new Date();
        url = url + '?' + str+'__qfy='+d.getTime();
    }
    if(type==='jsonp'){
         var script = document.createElement('script');
         script.src = url;
         document.body.appendChild(script);
         window[data[data.columnName]] = function(ser){
                   success&&success(ser);
                   error = null;
         };
         setTimeout(function(){
             error && error('settimrout');
             success = null;
         },timeout);
    }else{
        var xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                success(xhr.responseText);
            }else if(xhr.readyState==4 && xhr.status!=200){
                error && error(xhr.sratus);
            }
        }
        if(type =="get"){
            xhr.send();
        }else if(type=='post'){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(str);
        }
    }
}
