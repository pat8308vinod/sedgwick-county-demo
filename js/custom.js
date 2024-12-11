$(document).ready(function () {
    $(".sub-menu-list").each(function () {
      var $section = $(this);
      var $navLinks = $section.find("ul");
  
      function updateNavBlur($navLinks) {
        var navScrollTop = $navLinks.scrollTop(); // Current scroll position
        var navScrollBottom =
          $navLinks[0].scrollHeight - navScrollTop - $navLinks.outerHeight(); // Remaining scroll
  
        // Add or remove blur class based on scroll position
        if (navScrollBottom > 10) {
          $navLinks.addClass("has-bottom-blur");
        } else {
          $navLinks.removeClass("has-bottom-blur");
        }
      }
  
      // Initial check on page load
      updateNavBlur($navLinks);
  
      // Update blur on scroll
      $navLinks.on("scroll", function () {
        updateNavBlur($navLinks);
      });
  
      // Update blur on window resize
      $(window).on("resize", function () {
        updateNavBlur($navLinks);
      });
  
      // Update blur when hovering on li.has-dropdown
      $("li.has-dropdown").hover(
        function () {
          updateNavBlur($navLinks);
        }
      );
    });
  });

  $(document).ready(function(){
    $('.sc-home-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

     // Dynamically adjust navigation button positions
  function adjustButtonPositions() {
    const dotsWidth = $('.slick-dots').outerWidth();
    const buttonOffset = dotsWidth / 2 + 36; // Add extra spacing
    $('.slick-prev').css('left', `calc(50% - ${buttonOffset}px)`);
    $('.slick-next').css('right', `calc(50% - ${buttonOffset}px)`);
    
  }

  // Call on initialization and resize
  adjustButtonPositions();
  $(window).resize(adjustButtonPositions);
  });

  $(document).ready(function () {
    function updateBreadcrumbBlur($breadcrumb) {
      var scrollLeft = $breadcrumb.scrollLeft(); // Horizontal scroll position
      var scrollWidth = $breadcrumb[0].scrollWidth; // Total scrollable width
      var clientWidth = $breadcrumb[0].clientWidth; // Visible width
  
      // Check if there's content overflowing to the left
      if (scrollLeft > 0) {
        $breadcrumb.addClass("has-left-blur");
      } else {
        $breadcrumb.removeClass("has-left-blur");
      }
  
      // Check if there's content overflowing to the right
      if (scrollLeft + clientWidth < scrollWidth -10) {
        $breadcrumb.addClass("has-right-blur");
      } else {
        $breadcrumb.removeClass("has-right-blur");
      }
    }
  
    var $breadcrumb = $(".breadcrumb");
  
    // Initial check
    updateBreadcrumbBlur($breadcrumb);
  
    // Update blur on scroll
    $breadcrumb.on("scroll", function () {
      updateBreadcrumbBlur($breadcrumb);
    });
  
    // Update blur on window resize
    $(window).on("resize", function () {
      updateBreadcrumbBlur($breadcrumb);
    });
  });