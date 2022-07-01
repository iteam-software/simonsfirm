$(function() {
    if(window.location.pathname == "/") {
        $('.navbar-fixed-top').addClass('transparent');
        $(window).scroll(function() {
            var top = $('body').scrollTop();
            if(top >= 200) {
                $('.navbar-fixed-top').removeClass('transparent');
            } else {
                $('.navbar-fixed-top').addClass('transparent');
            }
        });
    } else {
        stickyActions();
        
        $(window).resize(stickyActions);
    }
    
    function stickyActions() {
        $('.body-content').css('padding-top', $('.navbar-fixed-top').outerHeight());
        $('.fixedsticky').css("top", $('.navbar-fixed-top').outerHeight());
        $('.fixedsticky').fixedsticky( 'destroy' );
        $('.fixedsticky').fixedsticky();
    }
    
    var $title = $('.splash-title');
    var $end = $('.splash-end');
    var prevPos = $('body').scrollTop();
    if($title.length && $end.length) {
        $(window).scroll(function(e) {
            var pos = $('body').scrollTop();
            var titleTop = $title.offset().top;
            var titleBottom = titleTop + $title.outerHeight(false);
            var endTop = $end.offset().top;
            var endBottom = endTop + $end.outerHeight(false);
            
            if(prevPos < pos) {
                // Scrolling Down
                if((pos + titleBottom) > (pos + endBottom)) {
                    $title.addClass('changeBG');
                } else {
                    $title.removeClass('changeBG');
                }
            } else {
                // Scrolling Up
                if((pos + titleTop) > (pos + endBottom)) {
                    $title.addClass('changeBG');
                } else {
                    $title.removeClass('changeBG');
                }
            }
            
            prevPos = pos;
        });
    }
});