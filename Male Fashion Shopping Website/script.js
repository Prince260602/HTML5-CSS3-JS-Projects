$(document).ready(function () {
    $("a").on("click", function (event) {
      // Check if the clicked anchor has a hash (target id)
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        var targetElement = $(hash); // Store the target element
  
        // Check if the target element exists
        if (targetElement.length) {
          $("html, body").animate(
            {
              scrollTop: targetElement.offset().top,
            },
            800,
            function () {
              window.location.hash = hash;
            }
          );
        }
      }
    });
  
    // For the menu-items click, uncheck the checkbox
    $(".menu-items a").click(function () {
      $("#checkbox").prop("checked", false);
      return false; // Prevent any default anchor behavior
    });
  });
  