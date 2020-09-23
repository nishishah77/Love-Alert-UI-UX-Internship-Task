 $(document).ready(function() {
            var click_status = 0;
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
                   click_status = click_status + 1;

                   if(click_status%2 != 0)
                   {
                        $(".content").hide();
                   }
                   else
                   {
                        $(".content").show();
                   }
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
                 
            }

            else {
                  $('nav').removeClass('black');                 
            }
      })