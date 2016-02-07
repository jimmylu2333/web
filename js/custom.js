function addEvent(func){
    var oldOnload = window.onload;
    if(typeof oldOnload == 'function')
        {
            window.onload = function(){
                oldOnload();
                func();
            }
        }else{
            window.onload = func;
        }
}     

 
