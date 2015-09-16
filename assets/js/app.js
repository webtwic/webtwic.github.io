$(document).ready(function () {

   // Define Variables
   var dfvisible = $("div").hasClass("dfvisible"),
        img = $("img"),
        noAlt = img.attr("alt", null),
        scripts = $("script"),
        noType = scripts.attr("type", null),
        noCharset = scripts.attr("charset", null),
        $to_top = $("a.to-top"),
        scroll_top_duration = 1000,
        offset_opacity = 1200,
        offset = 300;

   // Performance Fixes
   if(noAlt) {
      function addAlt () {
         $(img, this).attr("alt", "...");
      }
      addAlt();
   } else {
      return img.attr("alt");
   }

   if(noCharset) {
      function addCharset () {
         $(scripts, this).attr("charset", "utf-8");
      }
      addCharset();
   } else {
      return scripts.attr("charset");
   }

   if(noType) {
      function addType () {
         $(scripts, this).attr("type", "text/javascript");
      }
      addType();
   } else {
      return scripts.attr("type");
   }

   // Notification for disabled features
   function showDisabledFeatures () {
      $(".top-stripe").before(
         "<div id='disabledFeatures' class='dfvisible'>Certain features which affect the functionality of webtwic are disabled in your browser. Please try refreshing the page or get a better <a style='color:#fff; border-bottom:1px dotted #fff;' href='https://mozilla.org/firefox'>browser.</a> <span class='close-button'></span></div>"
      );
      $(".close-button").on("click",
         function () {
            hideDisabledFeatures();
            undoSiteAdjust();
         }
      );
   }

   function hideDisabledFeatures () {
      $("#disabledFeatures").removeClass("dfvisible");
   }
   function adjustSiteContent () {
      $(".top-stripe").addClass("adjustedMargin");
      $("#header").addClass("adjustedTop");
      $(".nav-menu").addClass("adjustedMargin");
      $(".site-content").addClass("adjustSiteContent");
   }
   function undoSiteAdjust () {
      $(".top-stripe").removeClass("adjustedMargin");
      $("#header").removeClass("adjustedTop");
      $(".nav-menu").removeClass("adjustedMargin");
      $(".site-content").removeClass("adjustSiteContent");
   }

   if (!Modernizr.flexbox || !Modernizr.inlinesvg || !Modernizr.svg || !Modernizr.svgclippaths || !Modernizr.fontface || !Modernizr.boxshadow || !Modernizr.borderradius || !Modernizr.csstransforms) {
      function resetSite() {
         showDisabledFeatures();
         adjustSiteContent();
      }
      resetSite();
   } else {
      function undoReset(argument) {
         hideDisabledFeatures();
         undoSiteAdjust();
      }
      undoReset();
   }

   if (Modernizr.csstransforms === false) {
      function resetLogoTransform() {
         $(".mobile_logo").css(
            {
               "transform": "none !important",
               "margin-left": "-9px"
            }
         );
      }
      // Call reset logo transform
      resetLogoTransform();
   } else {
      $(".mobile_logo").removeClass("float: none");
   }

   // Start Main Page
   $(window).scroll(function() {
      ($(this).scrollTop() > offset) ? $to_top.addClass("topVisible"): $to_top.removeClass("topVisible topFadeOut");
      if ($(this).scrollTop() > offset_opacity) {
         $to_top.addClass("topFadeOut");
      }
   });

   $to_top.on("click", function(e) {
      e.preventDefault();
      $("body,html").animate({
         scrollTop: 0,
      }, scroll_top_duration);
   });

   $("a.toggle-nav").click(function(e) {
      $(this).toggleClass("active");
      $("nav.nav-menu ul").toggleClass("active");

      e.preventDefault();
   });

   $("nav li ul.drop-nav").hide().removeClass("dropNavFallback");
   $("nav li.dropdown").hover(
      function () {
         $("ul.drop-nav", this).stop().slideToggle(200);
      }
   );
});
