$(document).ready(function () {

    /******************************* Side-bar Animation *****************************************/
    
    // dropdown menu
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

   (function () {
    // Close sidebar on button click
    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });

    // Open sidebar on button click
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

    // Automatically close sidebar when screen width is <= 1024px
    $(window).resize(function () {
        if ($(window).width() <= 992) {
            $(".page-wrapper").removeClass("toggled");
        }
    }).trigger('resize'); // Trigger resize to check on page load
     })();

    /******************************* Auto-fill Current Date *****************************************/
    
    // Automatically set today's date in input fields with IDs #packetDate and #dueDate
    (function () {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; // Formats the date as YYYY-MM-DD
        $('#dueDate').val(formattedDate);
    })();

    /******************************* Datalist Autocomplete *****************************************/
    
    // Custom autocomplete functionality for input and datalist
    (function () {
        var inputs = ['#clientNameInput'];
        var datalistes = ['#clientNameList'];

        inputs.forEach(function (inputSelector, index) {
            var input = $(inputSelector);
            var dataliste = $(datalistes[index]);

            input.on('focus', function () {
                dataliste.css('display', 'block');
            });

            // Handle option click
            dataliste.find('option').on('click', function () {
                input.val($(this).val());
                dataliste.css('display', 'none');
                input.css('border-radius', '5px');
            });

            input.on('input', function () {
                var text = input.val().toUpperCase();
                var hasVisibleOptions = false;

                dataliste.find('option').each(function () {
                    if ($(this).val().toUpperCase().indexOf(text) > -1) {
                        $(this).css('display', 'block');
                        hasVisibleOptions = true;
                    } else {
                        $(this).css('display', 'none');
                    }
                });

                dataliste.css('display', hasVisibleOptions ? 'block' : 'none');
            });

            // Handle keyboard navigation
            var currentFocus = -1;
            input.on('keydown', function (e) {
                var options = dataliste.find('option');

                if (e.keyCode === 40) { // Down arrow
                    currentFocus++;
                    addActive(options);
                } else if (e.keyCode === 38) { // Up arrow
                    currentFocus--;
                    addActive(options);
                } else if (e.keyCode === 13) { // Enter key
                    e.preventDefault();
                    if (currentFocus > -1) {
                        $(options[currentFocus]).click();
                    }
                }
            });

            function addActive(x) {
                if (!x) return false;
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = x.length - 1;
                $(x[currentFocus]).addClass('active');
            }

            function removeActive(x) {
                $(x).removeClass('active');
            }
        });

        // Close datalist on outside click
        $(document).on('click', function (event) {
            var target = $(event.target);
            if (!target.closest(inputs.join(',')).length && !target.closest(datalistes.join(',')).length) {
                $(datalistes.join(',')).css('display', 'none');
                inputs.forEach(function (inputSelector) {
                    $(inputSelector).css('border-radius', '5px');
                });
            }
        });
    })();

    /******************************* Input Field Focus Styling *****************************************/
    
    // Change border color on focus and revert on blur
    (function ($) {
        $("select,textarea,input:not([type='submit'])").on("focus", function () {
            $(this).css("border", "3px solid #f2d6a1");
        }).on("blur", function () {
            $(this).css("border", "");
        });
    })(jQuery);

    /******************************* Checkbox Toggling *****************************************/
    
    // Toggle checkbox state on label click
    (function () {
        $('.toggleContainer').on('click', function () {
            var checkbox = $(this).prev('.toggleCheckbox');
            checkbox.prop('checked', !checkbox.prop('checked'));
        });
    })();

    /******************************* Modal Control *****************************************/
    
    // Handles opening and closing of modal dialogs
    (function ($) {
        function openModal() {
            $(".modal-overlay").fadeIn();
            $("#confirmationModal").fadeIn();
        }

        function closeModal() {
            $(".modal-overlay").fadeOut();
            $("#confirmationModal").fadeOut();
        }

        $(".closeBtn").on("click", function () {
            openModal();
        });

        $("#btnOui").on("click", function () {
            closeModal();
        });

        $("#btnNo").on("click", function () {
            closeModal();
        });

        $(".modal-overlay").on("click", function () {
            closeModal();
        });
    })(jQuery);

    /******************************* Alternate Gradient Backgrounds *****************************************/
    
    // Alternate orange and black gradients for specific headers
    (function ($) {
        var gradients = [
            'linear-gradient(90deg, rgba(247, 148, 61, 1) 50%, rgba(255, 187, 128, 1) 100%)',
            'linear-gradient(90deg, #31353D 50%, rgba(0, 0, 0, 0.8) 100%)'
        ];

        $('.reglementBoxHeader').each(function (index) {
            var gradientIndex = index % 2;
            $(this).css('background', gradients[gradientIndex]);
        });
    })(jQuery);

    /******************************* Sidebar Custom Event *****************************************/
    
    // Prevent scroll to top
    (function ($) {
        $('#show-sidebar').on('click', function (event) {
            event.preventDefault();
        });
    })(jQuery);

});
