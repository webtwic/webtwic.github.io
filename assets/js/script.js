/**
 * Author: Olaolu Olawuyi

 * Date Created: 20/08/2015

 * Last Modified: 30/12/2015

 * Twitter: @whizkydee, @webtwic

 * Github: https://github.com/whizkydee/webtwic

*/

var s;
s = $(window).scrollTop();

jQuery(document).ready(function() {

	// Define Variables
	var is_DisabledFeatures = $("div").hasClass("dfvisible"),
	img = $("img"),
	is_noAlt = img.attr("alt", null),
	scripts = $("script"),
	is_noType = scripts.attr("type", null),
	is_noCharset = scripts.attr("charset", null);

	var $to_top = $("a.to-top"),
	is_toggle_active = $(".hamburger").hasClass("is_active"),
	height = 200;

	// Performance Fixes

	// Start browser detection

	browser = bowser;
	browser.ie = browser.msie;

	if (browser.webkit) {
		$("body").addClass("webkit");
	}
	if(browser.chrome) {
		$("body").addClass("chrome" + " " + "chrome" + parseInt(browser.version));
	}
	if(browser.msedge) {
		$("body").addClass("msedge" + " " + "msedge" + parseInt(browser.version));
	}
	if(browser.firefox) {
		$("body").addClass("firefox" + " " + "firefox" + parseInt(browser.version));
	}
	if(browser.msie) {
		$("body").addClass("ie" + " " + "ie" + parseInt(browser.version));
	}
	if(browser.safari) {
		$("body").addClass("safari" + " " + "safari" + parseInt(browser.version));
	}
	if(browser.opera) {
		$("body").addClass("opera" + " " + "opera" + parseInt(browser.version));
	}

	// Start Performance Functions

	function addAlt() {
		$(img, this).attr("alt", "...");
	}

	function addCharset() {
		$(scripts, this).attr("charset", "utf-8");
	}

	function addType() {
		$(scripts, this).attr("type", "text/javascript");
	}

	if(is_noAlt) {
		addAlt();
	} else {
		return img.attr("alt");
	}

	if(is_noCharset) {
		addCharset();
	} else {
		return scripts.attr("charset");
	}

	if(is_noType) {
		addType();
	} else {
		return scripts.attr("type");
	}

	// Notification for disabled features
	function showDisabledFeatures() {
		$(".top-stripe").before(
			"<div id='disabledFeatures' class='dfvisible'>Certain features which affect the functionality of webtwic are disabled in your browser. Please try refreshing the page or get a better <a style='color: #fff; border-bottom: 1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser.</a> <span class='close-button'></span></div>"
		);
		$(".close-button").on("click",
			function() {
				hideDisabledFeatures();
				undoSiteAdjust();
			});
	}

	function hideDisabledFeatures() {
		$("#disabledFeatures").removeClass("dfvisible");
	}
	function adjustSiteContent() {
		$(".top-stripe").addClass("adjustedMargin");
		$("#header .logo").addClass("adjustedTop");
		$(".main-menu").addClass("adjustedMargin");
		$("#header").addClass("adjustSiteContent");
	}
	function undoSiteAdjust() {
		$(".top-stripe").removeClass("adjustedMargin");
		$("#header .logo").removeClass("adjustedTop");
		$(".main-menu").removeClass("adjustedMargin");
		$("#header").removeClass("adjustSiteContent");
	}

	// Modernizr funnctions

	function resetSite() {
		showDisabledFeatures();
		adjustSiteContent();
	}

	function undoReset() {
		hideDisabledFeatures();
		undoSiteAdjust();
	}

	if (!Modernizr.flexbox || !Modernizr.inlinesvg || !Modernizr.svg || !Modernizr.svgclippaths || !Modernizr.fontface || !Modernizr.boxshadow || !Modernizr.borderradius || !Modernizr.csstransforms) {
		resetSite();
	} else {
		undoReset();
	}

	// Start Main Page

	$("nav li ul.drop-nav").hide().removeClass("dropNavFallback");

	if ( $(window).width() > 860 ) {
		$("nav li.dropdown").hover(function() {
			$("ul.drop-nav", this).stop().slideDown("fast");
		}, function() {
			$("ul.drop-nav", this).stop().slideUp("fast");
		});
	}

	$(".active-item").append(
		"<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M 16.682,19.674c 0.010-0.012, 0.014-0.028, 0.024-0.040l 6.982-7.714c 0.39-0.434, 0.39-1.138,0-1.572 c-0.004-0.004-0.008-0.006-0.012-0.008C 23.496,10.13, 23.244,10, 22.964,10L 8.998,10 c-0.286,0-0.54,0.138-0.722,0.352L 8.272,10.348 c-0.39,0.434-0.39,1.138,0,1.572l 6.998,7.754C 15.66,20.108, 16.292,20.108, 16.682,19.674z'></path></svg>"
	);

	$("a.hamburger").click(function(e) {
		$(this).toggleClass("is_active");

		e.preventDefault();
	});
	$(".mobile-header .mobile-nav").hide();

	$(window).scroll(function() {
		($(this).scrollTop() > height) ? $to_top.addClass("topVisible"): $to_top.removeClass("topVisible");
	});

	// Styles for homepage article-social

	$(".article .article-social a").hover(function() {
		$("span", this).eq(1).fadeIn(400);
	}, function() {
		$("span", this).eq(1).fadeOut(250);
	});

	// Functions for search-icon and ui-overlay-search

	$(".header-follow-search .search-wrap").on("click", function() {
		openUiOverlay();
	});

	$(".header-follow-search .close-icon").on("click", function() {
		closeUiOverlay();
	});

	$(".header-follow-search .close-icon").hover(
		function() {
			$(this).addClass("spin");
		},
		function() {
			$(this).removeClass("spin");
		});

	function openUiOverlay() {
		$(".ui-overlay-search").fadeIn(400).addClass("is_open");
	}

	function closeUiOverlay() {
		$(".ui-overlay-search").fadeOut(400).removeClass("is_open");
	}

	$(".ui-overlay-search .search-input input").focus(function() {
		$(".search-input").attr("data-focused", true);
		$(".search-input input").addClass("_is-focused");
		$("#__expand").addClass("visible");
	});

	$(".ui-overlay-search .search-input input").blur(function() {
		$(".search-input").attr("data-focused", false);
		$(".search-input input").removeClass("_is-focused");
		$("#__expand").removeClass("visible");
	});

	$(".post-meta .post-meta-inner .cta-btns a.is_inactive").on("click", function(e) {
		e.preventDefault();
	});

	$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        closeUiOverlay();
    } else {
		 return;
	 }});

	 $(".mobile-nav").hide();

	// Functions for more-posts button click

	function addLoader() {
		$(".secondary-category-section .category-posts-column [data-clicked='false']").attr("data-clicked", "true").after("<span class='loader'></span>");
	}
	$(".secondary-category-section .category-posts-column [data-clicked='false']").on("click", function(e) {
		addLoader();
		e.preventDefault();
	});

	$to_top.on("click", function(e) {
		$("body,html").animate({
			scrollTop: 0
		}, 1000);

		e.preventDefault();
	});

});
