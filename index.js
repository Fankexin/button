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
            if(num===-1){
                clearInterval(timer);
                $btn.val(con.title);
                $btn.removeAttr("disabled");
            }
            else{
                $btn.val( con.title+"("+num+"s)");
                $btn.attr("disabled","disabled");
            }
        }, 1000);
    }
    $btn.click(function() {
        con.onClick();
    });
    return {
        show: show
    }
    
}());
