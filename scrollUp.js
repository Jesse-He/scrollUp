(function (e) {
    e.scrollUp = function (t) {
        var n = {
            scrollName: "scrollUp",
            topDistance: 300,
            topSpeed: 300,
            animation: "fade",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: "︿",
            scrollImg: false,
            activeOverlay: false
        };
        var r = e.extend({}, n, t), i = "#" + r.scrollName;
        e("<a/>", {
            id: r.scrollName,
            href: "#top",
            title: r.scrollText
        }).appendTo("body");
        e(i).css({
            "z-index": "9999",
            "bottom": "20px",
            "height": "38px",
            "right": "20px",
            "width": "38px"
        });
        if (r.scrollImg) {
            e(i).css({
                "background": "url(img/top.png) no-repeat scroll 0 0 rgba(0, 0, 0, 0)"
            });
        } else {
            e(i).text(r.scrollText);
            e(i).css({
                "background-color": "#707070",
                "text-align": "center",
                "text-decoration": "none",
                "font-size": "30px",
                "color": "#fff",
                "border-radius": "20px"
            });
        }
        e(i).css({
            display: "none",
            position: "fixed",
            "z-index": "9999"
        });
        if (r.activeOverlay) {
            e("body").append("<div id='" + r.scrollName + "-active'></div>");
            e(i + "-active").css({
                position: "absolute",
                top: r.topDistance + "px",
                width: "100%",
                "border-top": "1px dotted " + r.activeOverlay,
                "z-index": "9999"
            })
        }
        e(window).scroll(
            function () {
                switch (r.animation) {
                    case "fade":
                        e(e(window).scrollTop() > r.topDistance ? e(i).fadeIn(r.animationInSpeed) : e(i).fadeOut(
                            r.animationOutSpeed));
                        break;
                    case "slide":
                        e(e(window).scrollTop() > r.topDistance ? e(i).slideDown(r.animationInSpeed) : e(i).slideUp(
                            r.animationOutSpeed));
                        break;
                    default:
                        e(e(window).scrollTop() > r.topDistance ? e(i).show(0) : e(i).hide(0))
                }
            });
        e(i).click(function (t) {
            e("html, body").animate({
                scrollTop: 0
            }, r.topSpeed);
            t.preventDefault()
        })
    }
})(jQuery);