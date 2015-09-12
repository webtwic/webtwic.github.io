jQuery(document).ready(function() {

   // Start Main Page

   var $back_to_top = $('a.to-top'),
   scroll_top_duration = 1000,
   offset_opacity = 1200,
   offset = 300;
   $(window).scroll(function() {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('top-is-visible'): $back_to_top.removeClass('top-is-visible top-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
         $back_to_top.addClass('top-fade-out');
      }
   });
   $back_to_top.on('click', function(e) {
      e.preventDefault();
      $('body,html').animate({
         scrollTop: 0,
      }, scroll_top_duration);
   });

   $('a.toggle-nav').click(function(e) {
      $(this).toggleClass('active');
      $('nav.nav-menu ul').toggleClass('active');

      e.preventDefault();
   });

   $('nav li ul.drop-nav').hide().removeClass('dropNavFallback');
   $('nav li.dropdown').hover(
      function () {
         $('ul.drop-nav').slideToggle(200);
      }
   );

   var img = $("img"),
      noAlt = img.attr("alt", null),
      scripts = $("script"),
      noType = scripts.attr("type", null),
      noCharset = scripts.attr("charset", null);

   if(noAlt) {
      $(img).attr("alt", "...");
   }

   if(noCharset) {
      $(scripts).attr("charset", "utf-8");
   }

   if(noType) {
      $(scripts).attr("type", "text/javascript");
   }

});
