/**
 * Author: whizkydee(Olaolu Olawuyi)

 * Date Created: 20/08/2015

 * Last Modified: 18/09/2015

 * Twitter: @whizkydee, @webtwic

 * Blog: http://whizkydee.tumblr.com

 * Github: https://github.com/whizkydee/webtwic

*/

jQuery(document).ready(function() {

   // Define Variables
   var is_DisabledFeatures = $("div").hasClass("dfvisible"),
        img = $("img"),
        noAlt = img.attr("alt", null),
        scripts = $("script"),
        noType = scripts.attr("type", null),
        noCharset = scripts.attr("charset", null),
        $to_top = $("a.to-top"),
        height = 200;

   // Performance Fixes
   if(noAlt) {
      function addAlt() {
         $(img, this).attr("alt", "...");
      }
      addAlt();
   } else {
      return img.attr("alt");
   }

   if(noCharset) {
      function addCharset() {
         $(scripts, this).attr("charset", "utf-8");
      }
      addCharset();
   } else {
      return scripts.attr("charset");
   }

   if(noType) {
      function addType() {
         $(scripts, this).attr("type", "text/javascript");
      }
      addType();
   } else {
      return scripts.attr("type");
   }

   // Notification for disabled features
   function showDisabledFeatures() {
      $(".top-stripe").before(
         "<div id='disabledFeatures' class='dfvisible'>Certain features which affect the functionality of webtwic are disabled in your browser. Please try refreshing the page or get a better <a style='color:#fff; border-bottom:1px dotted #fff;' href='https://google.com/chrome' target='_blank'>browser.</a> <span class='close-button'></span></div>"
      );
      $(".close-button").on("click",
         function() {
            hideDisabledFeatures();
            undoSiteAdjust();
         }
      );
   }

   function hideDisabledFeatures() {
      $("#disabledFeatures").removeClass("dfvisible");
   }
   function adjustSiteContent() {
      $(".top-stripe").addClass("adjustedMargin");
      $("#header").addClass("adjustedTop");
      $(".nav-menu").addClass("adjustedMargin");
      $(".site-content").addClass("adjustSiteContent");
   }
   function undoSiteAdjust() {
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

   }

   // Start Main Page

   $("nav li ul.drop-nav").hide().removeClass("dropNavFallback");
   $("nav li.dropdown").hover(
      function() {
         $("ul.drop-nav", this).slideToggle("fast");
      }
   );

   $(".active-menu").append(
      "<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink''><g><path d='M 16.682,19.674c 0.010-0.012, 0.014-0.028, 0.024-0.040l 6.982-7.714c 0.39-0.434, 0.39-1.138,0-1.572 c-0.004-0.004-0.008-0.006-0.012-0.008C 23.496,10.13, 23.244,10, 22.964,10L 8.998,10 c-0.286,0-0.54,0.138-0.722,0.352L 8.272,10.348 c-0.39,0.434-0.39,1.138,0,1.572l 6.998,7.754C 15.66,20.108, 16.292,20.108, 16.682,19.674z'></path></g></svg>"
   );

   $("a.toggle-nav").click(function(e) {
      $(this).toggleClass("active");
      $("nav.nav-menu ul").toggleClass("active").slideToggle(200);

      e.preventDefault();
   });

   $(window).scroll(function() {
      ($(this).scrollTop() > height) ? $to_top.addClass("topVisible"): $to_top.removeClass("topVisible topFadeOut");
      if ($(this).scrollTop() > 1200) {
         $to_top.addClass("topFadeOut");
      }
   });

   $to_top.on("click", function(e) {
      $("body,html").animate({
         scrollTop: 0
      }, 1000);

      e.preventDefault();
   });

});
