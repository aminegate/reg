$(document).ready(function() {
$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});


    
(function ($) { 
    // Get the current page name
    var currentPage = window.location.pathname.split("/").pop(); 

    $('.sidebar-dropdown a').each(function (index) {
        var link = $(this).attr('href');

        // Check for index.html or saisie.html and highlight the first instance
        if ((currentPage === 'index.html' || currentPage === 'saisie.html') && index === 0) {
            $(this).find('span').addClass('active-span'); 
            $(this).find('i').addClass('active-icon'); 
            return false; // Stop further iteration after highlighting the first
        }

        // Highlight the current page in other cases
        if (link === currentPage) {
            $(this).find('span').addClass('active-span'); 
            $(this).find('i').addClass('active-icon'); 
        }
    });
})(jQuery);
    
    
    (function ($) {
    $('#valider').on('click', function (e) {
        e.preventDefault(); // Prevent the default form submission
        window.location.href = 'saisie.html'; // Redirect to saisie.html
    });
})(jQuery);


(function() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Formats the date as YYYY-MM-DD
    $('#packetDate').val(formattedDate); 
     $('#dueDate').val(formattedDate); 
})();
    
    
    
    (function() {
  var inputs = ['#clientNameInput']; 
  var datalistes = ['#clientNameList']; 

  inputs.forEach(function(inputSelector, index) {
    var input = $(inputSelector);
    var dataliste = $(datalistes[index]);

    input.on('focus', function() {
      dataliste.css('display', 'block'); // Show the datalist when the input is focused
    });

    // Handle option click
    dataliste.find('option').on('click', function() {
      input.val($(this).val()); // Set the input value to the clicked option
      dataliste.css('display', 'none'); // Hide the options after selection
      input.css('border-radius', '5px'); // Reset border radius
    });

    input.on('input', function() {
      var text = input.val().toUpperCase(); // Get the input value
      var hasVisibleOptions = false; // Track if there are visible options

      // Iterate through options and show/hide based on input
      dataliste.find('option').each(function() {
        if ($(this).val().toUpperCase().indexOf(text) > -1) {
          $(this).css('display', 'block'); // Show matching option
          hasVisibleOptions = true; // At least one option is visible
        } else {
          $(this).css('display', 'none'); // Hide non-matching option
        }
      });

      // Show or hide the dropdown based on visible options
      if (hasVisibleOptions) {
        dataliste.css('display', 'block'); // Show dropdown if matches
      } else {
        dataliste.css('display', 'none'); // Hide if no matches
      }
    });

    var currentFocus = -1; // Track the current focused option
    input.on('keydown', function(e) {
      var options = dataliste.find('option'); // Get all options in the datalist
      
      if (e.keyCode === 40) { // Down arrow
        currentFocus++;
        addActive(options); // Highlight the next option
      } else if (e.keyCode === 38) { // Up arrow
        currentFocus--;
        addActive(options); // Highlight the previous option
      } else if (e.keyCode === 13) { // Enter key
        e.preventDefault();
        if (currentFocus > -1) {
          $(options[currentFocus]).click(); // Simulate a click on the active option
        }
      }
    });

    function addActive(x) {
      if (!x) return false; // Exit if no options
      removeActive(x); // Remove active class from all
      if (currentFocus >= x.length) currentFocus = 0; // Wrap to first option
      if (currentFocus < 0) currentFocus = (x.length - 1); // Wrap to last option
      $(x[currentFocus]).addClass('active'); // Add active class to current option
    }

    function removeActive(x) {
      $(x).removeClass('active'); // Remove active class from all options
    }
  });

  // Close datalist when clicking outside
  $(document).on('click', function(event) {
    var target = $(event.target);
    // Check if the click is outside the input and datalists
    if (!target.closest(inputs.join(',')).length && !target.closest(datalistes.join(',')).length) {
      $(datalistes.join(',')).css('display', 'none'); // Hide all datalists
      inputs.forEach(function(inputSelector) {
        $(inputSelector).css('border-radius', '5px'); // Reset border radius for all inputs
      });
    }
  });
})();
    
    
    (function ($) {
    $("select,textarea,input:not([type='submit'])").on("focus", function () {
        $(this).css("border", "3px solid #f2d6a1");
    }).on("blur", function () {
        $(this).css("border", "");
    });
})(jQuery);

    
    
     $("#valider").click(function(){
          event.preventDefault(); // Prevent form submission
    $(".form-section-two").slideDown("slow");
  });
    
    
    
    
    
    (function ($) {
    $('.tw-toggle').each(function (index) {
        $(this).find('input[type="radio"]').attr('name', 'toggle' + index);
    });
})(jQuery);
    
    

    

});
