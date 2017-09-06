/**
 * Created by Administrator on 2017/4/23.
 */
$.fn.extend({
    tab:function(h3,selectN,showN,div){
        var $_this1=$(this);
        $(this).find(h3).click(function(){
            var i=$(this).index();
            $(this).addClass(selectN).siblings().removeClass(selectN);
            $_this1.find(div).eq(i).addClass(showN).siblings().removeClass(showN);
        })
    }
})

