/**
 * Author: Olaolu Olawuyi

 * Date Created: 20/08/2015

 * Last Modified: 01/03/2016

 * Twitter: @whizkydee, @webtwic

 * Github: https://github.com/webtwic/webtwic.github.io

*/

var Webtwic = Webtwic || {};

var browser = bowser;

var test_canvas = document.createElement( "canvas" );
var canvascheck = ( test_canvas.getContext ) ? true : false;

Webtwic = {
	// Basic Information about Webtwic
	name: "Webtwic",
	description: "A community for coding and tech tweaks where beginners and experts can learn.",
	repo: "https://github.com/webtwic/webtwic.github.io",
	author: "Olaolu Olawuyi",
	version: 1.07,

	// Start main functions for the object

	// Function to add browser name and version to body class
	_showBrowser: function( b ) {
		$( "body" ).addClass( b + " " + b + parseInt( browser.version ) );
	},

	// Function to set attributes and values to elements
	_setAttr: function( elem, name, val ) {
		$( elem, this ).attr( name, val ) ;
	},

	// Function to push down .site-content
	_adjustSiteContent: function() {
		if ( $( "body" ).hasClass( "default-body" ) ) {
			$( ".top-stripe" ).addClass( "adjustedMargin" );
			$( "#header .logo" ).addClass( "adjustedTop" );
			$( ".main-menu" ).addClass( "adjustedMargin" );
			$( "#header" ).addClass( "adjustSiteContent" );
		} else if ( $( "body" ).hasClass( "secondary-body" ) ) {
			$( ".site-content" ).addClass( "adjustSiteContent" );
			$( ".secondary-header" ).addClass( "adjustedMargin" );
		}
	},

	// Function to push up .site-content to default state
	_undoSiteAdjust: function() {
		if ( $( "body" ).hasClass( "default-body" ) ) {
			$( ".top-stripe" ).removeClass( "adjustedMargin" );
			$( "#header .logo" ).removeClass( "adjustedTop" );
			$( ".main-menu" ).removeClass( "adjustedMargin" );
			$( "#header" ).removeClass( "adjustSiteContent" );
		} else if ( $( "body" ).hasClass( "secondary-body" ) ) {
			$( ".secondary-header" ).removeClass( "adjustedMargin" );
		}
	},

	// Function to show Notifications before header
	_showNotif: function( text ) {
		text = ( typeof text == "undefined" ) ? notif_text : text;
		Webtwic._adjustSiteContent();
		$( "body" ).prepend(
			"<div class='notif_vis' id='notifBanner'>"+text+""+close_button+"</div>"
		);

		$( ".close-button" ).on( "click", function( e ) {
			e.preventDefault();
			Webtwic._undoReset();
		});
	},

	// Function to hide Notifications
	_hideNotif: function() {
		$( "#notifBanner" ).removeClass( "notif_vis" );
	},

	_resetSite: function() {
		Webtwic._showNotif();
		Webtwic._adjustSiteContent();
	},

	_undoReset: function() {
		Webtwic._hideNotif();
		Webtwic._undoSiteAdjust();
	},
}, WBT = Webtwic,

$$ = Webtwic,

close_button = "<a href='#' class='webtwicons close-button'></a>";

notif_text = "Some features which affect the functionality of webtwic are disabled in your browser. Please try refreshing the page or get a better <a style='color: #fff; border-bottom: 1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser.</a>";


// Detect when the document is ready

jQuery( document ).ready( function() {
	// Test for HTML5 support
	if ( window.Modernizr ) {
		if ( !Modernizr.canvas ) {
			Webtwic._showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better <a style='color: #fff; border-bottom: 1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser</a> for an awesome experience." );
		} else {
			// Do nothing.
		}
	} else if ( !window.Modernizr ) {
		if ( canvascheck == false ) {
			Webtwic._showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better <a style='color: #fff; border-bottom: 1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser</a> for an awesome experience." );
		} else {
			// Do nothing.
		}
	} else {
		// Do nothing.
	}

	// Define Variables
	var $scroll_top = $( "a.scroll_top" ),
	is_toggle_active = $( ".hamburger" ).hasClass( "is_active" ),
	height = 200;

	// Performance Fixes

	// Start browser detection

	browser.ie = browser.msie;

	if ( browser.webkit ) {
		$( "body" ).addClass( "webkit" );
	}
	if ( browser.chrome ) {
		Webtwic._showBrowser( "chrome" );
	}
	if ( browser.msedge ) {
		Webtwic._showBrowser( "msedge" );
	}
	if ( browser.firefox ) {
		Webtwic._showBrowser( "firefox" );
	}
	if ( browser.msie ) {
		Webtwic._showBrowser( "ie" );
	}
	if ( browser.safari ) {
		Webtwic._showBrowser( "safari" );
	}
	if ( browser.opera ) {
		Webtwic._showBrowser( "opera" );
	}

	/*
		TODO: Rebuild Performance fixes for attributes
		See history of Performance fixes.
		Also, check StackOverflow.
		See Issue #12
	*/

	if ( window.Modernizr ) {
		if ( !Modernizr.flexbox || !Modernizr.inlinesvg || !Modernizr.svg || !Modernizr.svgclippaths || !Modernizr.fontface || !Modernizr.boxshadow || !Modernizr.borderradius || !Modernizr.csstransforms ) {
			Webtwic._showNotif();
		} else {
			// Do nothing.
		}
	} else {
		// Do nothing.
	}

	// Start Main Page

	$( "nav li ul.drop-nav" ).hide().removeClass( "dropNavFallback" );

	if ( $( window ).width() > 860 ) {
		$( "nav li.dropdown" ).hover(function() {
			$( "ul.drop-nav", this ).stop().slideDown( "fast" );
		}, function() {
			$( "ul.drop-nav", this ).stop().slideUp( "fast" );
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
		$( "span", this ).eq(1).fadeIn( 400 );
	}, function() {
		$( "span", this ).eq(1).fadeOut(250);
	});

	// Functions for search-icon and ui-overlay-search

	$( ".header-follow-search .search-wrap" ).on( "click", function() {
		openUiOverlay();
	});

	$( ".header-follow-search .close-icon" ).on( "click", function( e ) {
		e.preventDefault();
		closeUiOverlay();
	});

	$( ".header-follow-search .close-icon" ).hover(
		function() {
			$( this ).addClass( "spin" );
		},
		function() {
			$( this ).removeClass( "spin" );
	});

	function openUiOverlay() {
		$( ".ui-overlay-search" ).fadeIn(400).addClass( "is_open" );
	}

	function closeUiOverlay() {
		$( ".ui-overlay-search" ).fadeOut(400).removeClass( "is_open" );
	}

	$( ".ui-overlay-search .search-input input" ).focus(function() {
		$( ".search-input" ).attr( "data-focused", true );
		$( ".search-input input" ).addClass( "_is-focused" );
		$( "#__expand" ).addClass( "visible" );
	});

	$( ".ui-overlay-search .search-input input" ).blur(function() {
		$( ".search-input" ).attr( "data-focused", false );
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
	 }});

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
