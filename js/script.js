/**
 * Author: Olaolu Olawuyi

 * Date Created: 20/08/2015

 * Last Modified: 29/03/2016

 * Twitter: @whizkydee, @webtwic

 * Github: https://github.com/webtwic/webtwic-site

*/

// Define some variables that need to be present before the DOM is ready

var Webtwic = Webtwic || {};

var browser = bowser;

var test_canvas = document.createElement( "canvas" );
var canvascheck = ( test_canvas.getContext ) ? true : false;


var HTML					= document.documentElement,
	 BODY 				= $( "body" ),
	 topStripe			= $( ".top-stripe" ),
	 primaryLogo		= $( "#header .logo" ),
	 mainMenu			= $( ".main-menu" ),
	 primaryHeader		= $( "#header" ),
	 siteContent		= $( ".site-content" ),
	 secondaryHeader	= $( ".secondary-header" ),
	 notifBanner		= $( "#notifBanner" ),
	 M						= Modernizr,




	 /* **************************************************** */
	 close_button = "<a href='#' class='webtwicons close-button'></a>",
	 browser_link = " " + "<a style='color: #fff; border-bottom: 1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser.</a>" + " ",
	 notif_text = "Some features which affect the functionality of webtwic are disabled in your browser. Please try refreshing the page or get a better" +browser_link;

Webtwic = {
	// Basic Information about Webtwic
	name: "Webtwic",
	description: "A community focused on code tweaks, articles and tutorials for newbie and professional developers.",
	repo: "https://github.com/webtwic/webtwic-site",
	author: "Olaolu Olawuyi",
	version: "1.0.0",

	// Start main functions for the object

	// Function to add browser name and version to body class
	showBrowser: function( b ) {
		b = (typeof b == "undefined") ? browser.name : b;
		BODY.addClass( b.toLowerCase() + " " + b.toLowerCase() + parseInt( browser.version ) );
	},

	// Function to set attributes and values to elements
	setAttr: function( elem, name, val ) {
		$( elem, this ).attr( name, val );
	},

	// Function to push down .site-content
	adjustSiteContent: function() {
		if ( BODY.hasClass( "default-body" ) ) {
			topStripe.addClass( "adjustedMargin" );
			primaryLogo.addClass( "adjustedTop" );
			mainMenu.addClass( "adjustedMargin" );
			primaryHeader.addClass( "adjustSiteContent" );
		} else if ( BODY.hasClass( "secondary-body" ) ) {
			siteContent.addClass( "adjustSiteContent" );
			secondaryHeader.addClass( "adjustedMargin" );
		}
	},

	// Function to push up .site-content to default state
	undoSiteAdjust: function() {
		if ( BODY.hasClass( "default-body" ) ) {
			topStripe.removeClass( "adjustedMargin" );
			primaryLogo.removeClass( "adjustedTop" );
			mainMenu.removeClass( "adjustedMargin" );
			primaryHeader.removeClass( "adjustSiteContent" );
		} else if ( BODY.hasClass( "secondary-body" ) ) {
			secondaryHeader.removeClass( "adjustedMargin" );
		}
	},

	// Function to show Notifications before header
	showNotif: function( text ) {
		text = ( typeof text == "undefined" ) ? notif_text : text;
		Webtwic.adjustSiteContent();
		BODY.prepend(
			"<div class='notif_vis' id='notifBanner'>"+text+""+close_button+"</div>"
		);

		$( ".close-button" ).on( "click", function( e ) {
			e.preventDefault();
			Webtwic.undoReset();
		});
	},

	// Function to hide Notifications
	hideNotif: function() {
		notifBanner.removeClass( "notif_vis" );
	},

	resetSite: function() {
		Webtwic.showNotif();
		Webtwic.adjustSiteContent();
	},

	undoReset: function() {
		Webtwic.hideNotif();
		Webtwic.undoSiteAdjust();
	},
}, WBT = Webtwic,

$$ = Webtwic;


// Detect when the DOM is ready

jQuery( document ).ready( function() {
	// Test for HTML5 support
	if ( window.M ) {
		if ( !M.canvas ) {
			Webtwic.showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better" +browser_link+ "for an awesome experience." );
		} else {
			// Do nothing.
		}
	} else if ( !window.M ) {
		if ( canvascheck == false ) {
			Webtwic.showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better" +browser_link+ "for an awesome experience." );
		} else {
			// Do nothing.
		}
	} else {
		// Do nothing.
	}

	// Define Variables
	var $scroll_top = $( "a.scroll_top" ),
	is_toggle_active = $( ".hamburger" ).hasClass( "is_active" ),
	height = 200
	dropNav = $( "ul.drop-nav" ),
	dropDown = $( "nav li.dropdown" ),
	headerSearch = $( ".header-follow-search" ),
	headerSearchInput = $( ".header-follow-search .search-wrap" ),
	overlaySearch = $( ".ui-overlay-search" ),
	headerSearchClose = $( ".header-follow-search .close-icon" );

	// Performance Fixes

	// Start browser detection

	browser.ie = browser.msie;

	if ( browser.webkit ) {
		Webtwic.showBrowser( "webkit" );
	}
	else if ( browser.chrome ) {
		Webtwic.showBrowser();
	}
	else if ( browser.msedge ) {
		Webtwic.showBrowser();
	}
	else if ( browser.firefox ) {
		Webtwic.showBrowser();
	}
	else if ( browser.msie ) {
		Webtwic.showBrowser( "ie" );
	}
	else if ( browser.safari ) {
		Webtwic.showBrowser();
	}
	else if ( browser.opera ) {
		Webtwic.showBrowser();
	} else {
		// Do nothing.
	}

	/*
		TODO: Rebuild Performance fixes for attributes
		See history of Performance fixes.
		Also, check StackOverflow.
		See Issue #12
	*/

	if ( window.M ) {
		if ( !M.flexbox || !M.inlinesvg || !M.svg || !M.svgclippaths || !M.fontface || !M.boxshadow || !M.borderradius || !M.csstransforms ) {
			Webtwic.showNotif();
		} else {
			// Do nothing.
		}
	} else {
		// Do nothing.
	}

	// Start Main Page

	$( dropNav ).hide().removeClass( "dropNavFallback" );

	if ( $( window ).width() > 860 ) {
		dropDown.hover(function() {
			$( dropNav, this ).stop().slideDown( "fast" );
		}, function() {
			$( dropNav, this ).stop().slideUp( "fast" );
		});
	}

	$( ".active-item" ).append(
		"<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><path d='M 16.682,19.674c 0.010-0.012, 0.014-0.028, 0.024-0.040l 6.982-7.714c 0.39-0.434, 0.39-1.138,0-1.572 c-0.004-0.004-0.008-0.006-0.012-0.008C 23.496,10.13, 23.244,10, 22.964,10L 8.998,10 c-0.286,0-0.54,0.138-0.722,0.352L 8.272,10.348 c-0.39,0.434-0.39,1.138,0,1.572l 6.998,7.754C 15.66,20.108, 16.292,20.108, 16.682,19.674z'></path></svg>"
	);

	$( "a.hamburger" ).click(function( e ) {
		$( this ).toggleClass( "is_active" );

		e.preventDefault();
	});
	$( ".mobile-header .mobile-nav" ).hide();

	$( window ).scroll(function() {
		( $( this ).scrollTop() > height ) ? $scroll_top.addClass( "topVisible" ): $scroll_top.removeClass( "topVisible" );
	});

	// Styles for homepage article-social

	$( ".article .article-social a" ).hover(function() {
		$( "span", this ).eq(1).fadeIn(400);
	}, function() {
		$( "span", this ).eq(1).fadeOut(250);
	});

	// Functions for search-icon and ui-overlay-search

	headerSearchInput.on( "click", function() {
		openUiOverlay();
	});

	headerSearchClose.on( "click", function( e ) {
		e.preventDefault();
		closeUiOverlay();
	});

	headerSearchClose.hover(
		function() {
			$( this ).addClass( "spin" );
		}, function() {
			$( this ).removeClass( "spin" );
	});

	function openUiOverlay() {
		overlaySearch.fadeIn(400).addClass( "is_open" );
	}

	function closeUiOverlay() {
		overlaySearch.fadeOut(400).removeClass( "is_open" );
	}

	$( ".ui-overlay-search .search-input input" ).focus(function() {
		$( ".search-input" ).attr( "data-focused", "true" );
		$( ".search-input input" ).addClass( "_is-focused" );
		$( "#__expand" ).addClass( "visible" );
	});

	$( ".ui-overlay-search .search-input input" ).blur(function() {
		$( ".search-input" ).attr( "data-focused", "false" );
		$( ".search-input input" ).removeClass( "_is-focused" );
		$( "#__expand" ).removeClass( "visible" );
	});

	$( ".post-meta .post-meta-inner .cta-btns a.is_inactive" ).on( "click", function( e ) {
		e.preventDefault();
	});

	$( document ).keydown(function( e ) {
		if ( e.keyCode == 27 ) {
			closeUiOverlay();
		} else {
			// Do nothing.
		}
 	});

	$( ".mobile-nav" ).hide();

	// Functions for more-posts button click

	function addLoader() {
		$( ".secondary-category-section .category-posts-column [data-clicked='false']" ).attr( "data-clicked", "true" ).append( "<span class='loader'></span>" );
	}

	$( ".secondary-category-section .category-posts-column [data-clicked='false']" ).on( "click", function( e ) {
		$( this ).css({
			"background": "#50ABF1",
			"color": "#fff"
		});
		addLoader();
		e.preventDefault();
	});

	$scroll_top.on( "click", function( e ) {
		$( "body, html" ).animate({
			scrollTop: 0
		}, 1000);

		e.preventDefault();
	});

});
