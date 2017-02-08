$(function () {

    function is_touch_device ()
    {
        try
        {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (is_touch_device())
    {
        $('#nav-mobile').css({ overflow: 'auto'});
    }

    $('.button-collapse').sideNav({'edge': 'left'});
    
})