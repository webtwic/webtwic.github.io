/**
 * Author: Olaolu Olawuyi

 * Date Created: 20/08/2015

 * Last Modified: 01/07/2016

 * Twitter: @whizkydee, @webtwic

 * Github: https://github.com/webtwic/webtwic.github.io

*/

var Webtwic = Webtwic || {};

var browser_name = bowser.name.toLowerCase();

var test_canvas = document.createElement( 'canvas' );
var canvascheck = ( test_canvas.getContext ) ? true : false;

Webtwic = {
	// Basic Information about Webtwic
	name: 'Webtwic',
	description: 'A community focused on code tweaks, articles and tutorials for newbie and professional developers.',
	repo: 'https://github.com/webtwic/webtwic-site',
	author: 'Olaolu Olawuyi',
	version: '1.0.0',

	// Start main functions for the object

	// Function to add browser name and version to body class
	showBrowser: function( b ) {
		b = (typeof b == 'undefined') ? browser_name : b.toLowerCase();
		if ( ! ( bowser.webkit ) )
			$( 'body' ).addClass( b + ' ' + b + parseInt( bowser.version ) );
		else
			$( 'body' ).addClass( 'webkit' + ' ' + b + ' ' + b + parseInt( bowser.version ) );
	},

	// Function to set attributes and values to elements
	setAttr: function( elem, name, val ) {
		$( elem, this ).attr( name, val );
	},

	// Function to push down .site-content
	adjustSiteContent: function() {
		if ( $( 'body' ).hasClass( 'default-body' ) ) {
			$( '.top-stripe' ).addClass( 'adjustedMargin' );
			$( '#header .logo' ).addClass( 'adjustedTop' );
			$( '.main-menu' ).addClass( 'adjustedMargin' );
			$( '#header' ).addClass( 'adjustSiteContent' );
		} else if ( $( 'body' ).hasClass( 'secondary-body' ) ) {
			$( '.site-content' ).addClass( 'adjustSiteContent' );
			$( '.secondary-header' ).addClass( 'adjustedMargin' );
		}
	},

	// Function to push up .site-content to default state
	undoSiteAdjust: function() {
		if ( $( 'body' ).hasClass( 'default-body' ) ) {
			$( '.top-stripe' ).removeClass( 'adjustedMargin' );
			$( '#header .logo' ).removeClass( 'adjustedTop' );
			$( '.main-menu' ).removeClass( 'adjustedMargin' );
			$( '#header' ).removeClass( 'adjustSiteContent' );
		} else if ( $( 'body' ).hasClass( 'secondary-body' ) ) {
			$( '.secondary-header' ).removeClass( 'adjustedMargin' );
		}
	},

	// Function to show Notifications before header
	showNotif: function( text ) {
		text = ( typeof text == 'undefined' ) ? notif_text : text;
		Webtwic.adjustSiteContent();
		$( 'body' ).prepend(
			'<div class="notif_vis" id="notifBanner">'+text+''+close_button+'</div>'
		);

		$( '.close-button' ).on( 'click', function( e ) {
			e.preventDefault();
			Webtwic.undoReset();
		});
	},

	// Function to hide Notifications
	hideNotif: function() {
		$( '#notifBanner' ).removeClass( 'notif_vis' );
	},

	resetSite: function() {
		Webtwic.showNotif();
		Webtwic.adjustSiteContent();
	},

	undoReset: function() {
		Webtwic.hideNotif();
		Webtwic.undoSiteAdjust();
	},
};

var WBT = Webtwic,
	 $$ = Webtwic,
	 close_button = '<a href="#" class="webtwicons close-button"></a>',
	 browser_link = ' ' + '<a style="color: #fff; border-bottom: 1px dotted #fff;" href="https://google.com/chrome" target="_blank">browser.</a>' + ' ',
	 notif_text = 'Whoa. Your browser currently dosen\'t support some important features. Please try refreshing this page or get a better' +browser_link;


// Detect when the DOM is ready

jQuery( document ).ready( function() {
	// Test for HTML5 support
	if ( window.Modernizr )
		if ( !Modernizr.canvas )
			Webtwic.showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better" +browser_link+ "for an awesome experience." );
		 else /* do nothing */ ;
	 else
		if ( canvascheck === false )
			Webtwic.showNotif ( "Oops. Looks like your browser doesn't support HTML5. Please get a better" +browser_link+ "for an awesome experience." );
		 else /* do nothing */ ;

	// Define Variables
	var $scroll_top = $( 'a.scroll_top' ),
	is_toggle_active = $( '.hamburger' ).hasClass( 'is_active' ),
	height = 200;

	// Performance Fixes

	// Start browser detection
	switch ( browser_name ) {
	   case 'microsoft edge':
	      Webtwic.showBrowser( 'msedge' );
	      break;
		default:
			Webtwic.showBrowser();
	}

	/*
		TODO: Rebuild Performance fixes for attributes
		See history of Performance fixes.
		Also, check StackOverflow.
		See Issue #12
	*/

	var required_features = [
		Modernizr.flexbox,
		Modernizr.inlinesvg,
		Modernizr.svg,
		Modernizr.svgclippaths,
		Modernizr.fontface,
		Modernizr.boxshadow,
		Modernizr.borderradius,
		Modernizr.csstransforms
	];

	if ( window.Modernizr )
		if ( !( required_features ) )
			Webtwic.showNotif();
		else /* do nothing */ ;
	else /* do nothing */ ;

	// Start Main Page

	$( 'nav li ul.drop-nav' )
	.hide()
	.removeClass( 'dropNavFallback' );

	if ( $( window ).width() > 768 ) {
		$( 'nav li.dropdown' ).hover(function() {
			$( 'ul.drop-nav', this )
			.stop()
			.slideDown( 'fast' );
		}, function() {
			$( 'ul.drop-nav', this )
			.stop()
			.slideUp( 'fast' );
		});
	}

	$( '.active-item' ).append(
		'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 16.682,19.674c 0.010-0.012, 0.014-0.028, 0.024-0.040l 6.982-7.714c 0.39-0.434, 0.39-1.138,0-1.572 c-0.004-0.004-0.008-0.006-0.012-0.008C 23.496,10.13, 23.244,10, 22.964,10L 8.998,10 c-0.286,0-0.54,0.138-0.722,0.352L 8.272,10.348 c-0.39,0.434-0.39,1.138,0,1.572l 6.998,7.754C 15.66,20.108, 16.292,20.108, 16.682,19.674z"></path></svg>'
	);

	$( 'a.hamburger' ).on('click', function( e ) {
		$( this ).toggleClass( 'is_active' );

		e.preventDefault();
	});
	$( '.mobile-header .mobile-nav' ).hide();

	$( window ).on('scroll', function() {
		( $( this ).scrollTop() > height ) ? $scroll_top.addClass( 'topVisible' ): $scroll_top.removeClass( 'topVisible' );
	});

	// Styles for homepage article-social

	$( '.article .article-social a' ).hover(function() {
		$( 'span', this )
		.find( '.tooltip' )
		.addClass( 'visible' );
	}, function() {
		$( 'span', this )
		.find( '.tooltip' )
		.removeClass( 'visible' );
	});

	// Functions for search-icon and ui-overlay-search

	$( '.header-follow-search .search-wrap' ).on( 'click', function() {
		openUIOverlay();
	});

	$( '.header-follow-search .close-icon' ).on( 'click', function( e ) {
		e.preventDefault();
		closeUIOverlay();
	});

	$( '.header-follow-search .close-icon' ).hover(
		function() {
			$( this ).addClass( 'spin' );
		}, function() {
			$( this ).removeClass( 'spin' );
	});

	function openUIOverlay() {
		if ( $( '.ui-overlay-search' ).hasClass( 'is_closed' ))
			$( '.ui-overlay-search' )
			.removeClass( 'is_closed' )
			.addClass( 'is_open' );
		else
			$( '.ui-overlay-search' ).addClass( 'is_open' );
	}

	function closeUIOverlay() {
		if ( $( '.ui-overlay-search' ).hasClass( 'is_open' ) )
			$( '.ui-overlay-search' )
			.removeClass( 'is_open' )
			.addClass( 'is_closed' );
		else
			$( '.ui-overlay-search' ).addClass( 'is_closed' )
	}

	$( '.ui-overlay-search .search-input input' ).on('focus', function() {
		$( '.search-input' ).attr( 'data-focused', 'true' );
		$( '.search-input input' ).addClass( '_is-focused' );
		$( '#__expand' ).addClass( 'visible' );
	});

	$( '.ui-overlay-search .search-input input' ).on('blur', function() {
		$( '.search-input' ).attr( 'data-focused', 'false' );
		$( '.search-input input' ).removeClass( '_is-focused' );
		$( '#__expand' ).removeClass( 'visible' );
	});

	$( '.post-meta .post-meta-inner .cta-btns a.is_inactive' ).on( 'click', function( e ) {
		e.preventDefault();
	});

	$( document ).on('keydown', function( e ) {
		if ( e.keyCode == 27 )
			closeUIOverlay();
		else /* do nothing */ ;
 	});

	$( '.mobile-nav' ).hide();

	// Functions for more-posts button click

	var loadMoreBtn = '.secondary-category-section .category-posts-column [data-clicked="false"]';

	function addLoader() {
		$( loadMoreBtn )
		.attr( 'data-clicked', 'true' )
		.append( '<span class="loader"></span>' );
	}

	$( loadMoreBtn ).on( 'click', function( e ) {
		$( this ).css({
			'background': '#50ABF1',
			'color': '#fff'
		});
		addLoader();
		e.preventDefault();
	});

	$scroll_top.on( 'click', function( e ) {
		$( 'body, html' ).animate({
			scrollTop: 0
		}, 1000);

		e.preventDefault();
	});

});
