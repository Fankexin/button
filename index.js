var $timerButton=(function(){
    var $btn=$('<input class="timer-button" type="button" value="同意(6s)" disabled />');
    var timer;
    var num;
    var txt = $('details input[type="text"]');
    var con={
        container: "body",
        num: 6,
        title: txt.val
    }
    
    function show(conf) {
        if (timer) clearInterval(timer);

        $(con.container).append($btn);
        $.extend(con,conf);
        num = con.num;
        $btn.val(con.title+"("+num+"s)")
        timer =setInterval(function() {
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val(con.title);
                $btn.removeAttr("disabled");
            }
            else{
                $btn.val( con.title+"("+num+"s)");
            }
        }, 1000);
    }
    $btn.click(function() {
        cfg.onClick();
    });
    return {
        show: show
    }
    
}());

//不用 page load event
/**
 * 封装成对象有几种方案
 * 1.简单对象字面量，不完全是面向对象，不能包括私有方法
 * var timerButton={
 *  show:function()
 * }
 * 2.工厂函数，一个函数返回值是一个简单对象
 * var timerButton=(function(){
 *  return {
 *      show:function(){}
 *  }
 * }())
 * 3.构造函数
 * function TimerButton(){
 *  
 * }
 * var tb= new TimerButton();
 */