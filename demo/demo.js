/**
 * Created by htx.he on 2015/12/2.
 */
$(function () {
    $.scrollUp({
        topDistance: '300',
        topSpeed: 300,
        animation: 'slide',
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollImg: false,
        activeOverlay: true
    });
});
function moveto(thetop) {
    $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: thetop
    }, 500);
}