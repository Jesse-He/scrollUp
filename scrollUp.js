(function(e) {
	e.scrollUp = function(t) {
		var n = {
			scrollName : "scrollUp",
			topDistance : 300,
			topSpeed : 300,
			animation : "fade",
			animationInSpeed : 200,
			animationOutSpeed : 200,
			scrollText : "Scroll to top",
			scrollImg : false,
			activeOverlay : false
		};
		var r = e.extend({}, n, t), i = "#" + r.scrollName;
		e("<a/>", {
			id : r.scrollName,
			href : "#top",
			title : r.scrollText
		}).appendTo("body");
		if (!r.scrollImg) {
			e(i).text(r.scrollText)
		}
		e(i).css({
			display : "none",
			position : "fixed",
			"z-index" : "2147483647"
		});
		if (r.activeOverlay) {
			e("body").append("<div id='" + r.scrollName + "-active'></div>");
			e(i + "-active").css({
				position : "absolute",
				top : r.topDistance + "px",
				width : "100%",
				"border-top" : "1px dotted " + r.activeOverlay,
				"z-index" : "2147483647"
			})
		}
		e(window).scroll(
				function() {
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
		e(i).click(function(t) {
			e("html, body").animate({
				scrollTop : 0
			}, r.topSpeed);
			t.preventDefault()
		})
	}
})(jQuery);
(function($) {
	$.fn.unveil = function(threshold) {
		var $w = $(window), th = threshold || 0, retina = window.devicePixelRatio > 1, attrib = retina ? "data-src-retina"
				: "data-src", images = this, loaded, inview, source;
		this.one("unveil", function() {
			source = this.getAttribute(attrib);
			source = source || this.getAttribute("data-src");
			if (source)
				this.setAttribute("src", source);
		});
		function unveil() {
			inview = images.filter(function() {
				var $e = $(this), wt = $w.scrollTop(), wb = wt + $w.height(), et = $e.offset().top, eb = et
						+ $e.height();
				return eb >= wt - th && et <= wb + th;
			});
			loaded = inview.trigger("unveil");
			images = images.not(loaded);
		}
		$w.scroll(unveil);
		$w.resize(unveil);
		unveil();
		return this;
	};
})(jQuery);

$(function(){
	// back to top
	$("img.lazy").unveil();
	$("#start-intro").click(function() {
		bootstro.start();
	});
	$.scrollUp({
		scrollName : 'scrollUp',
		topDistance : '300', 
		topSpeed : 300, 
		animation : 'fade', 
		animationInSpeed : 200, 
		animationOutSpeed : 200, 
		activeOverlay : false
	});
});
function moveto(thetop) {
	$("html:not(:animated),body:not(:animated)").animate({
		scrollTop : thetop
	}, 500);
}