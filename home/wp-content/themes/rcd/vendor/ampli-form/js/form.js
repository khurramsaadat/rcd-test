jQuery(document).ready(function() {
    sendMailAjax(); // Call mail sending ajax function
    sendMailAjaxNewsletter();
    ampliFormValidation(); // Call form validation function
});

/**
 * Submit form with all data using Ajax call
 */
function sendMailAjax() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var formAction = jQuery('.form-action-url').text().trim();
    // Define basic variables
    var $formMainEl = jQuery('.ampli-form__form'),
        formData,
        actionUrl = baseUrl + '/wp-content/themes/rcd/ampli-form.php',
        $formMessageEl = jQuery('#form-message');

    jQuery('body').append('<div class="form-loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');

    $formMainEl.on('submit', function(event) {

        event.preventDefault();

        if ($formMainEl.valid()) { // Check form is valid to submit data

            // Get all form fields data to an array
            formData = jQuery(this).serialize();

            console.log('Form event triggered');

            console.log(formData);

            // Send ajax request to send-mail.php with form data
            jQuery.ajax({
                type: 'post',
                url: actionUrl,
                data: formData,
                beforeSend: function() {
                    // Show ajax loader
                    jQuery('.form-loader').fadeIn(500);
                },
                success: function(response) {

                    $formMainEl.trigger('reset');

                    $formMessageEl.html('<span class="ampli-form__messages-block"><span class="ampli-form__messages-icon icon icon-mark"></span><h4 class="ampli-form__messages-title mb-0">Thanks!</h4><p class=" paragraph-md color-green ampli-form__messages-txt">We will get in touch with you shortly...</p></span>');

                    // Hide ajax loader
                    jQuery('.form-loader').fadeOut(700);

                },
                error: function(jqXHR, exception) {

                    console.log(jqXHR);

                    $formMessageEl.text('Opps! something went wrong.');

                    // Hide ajax loader
                    jQuery('.form-loader').fadeOut(700);

                }
            });

        }

    });

    jQuery('.close-msg').on('click', function(evt) {
        evt.preventDefault();
        $formMessageEl.html('');
    });

}

function sendMailAjaxNewsletter() {
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    // Define basic variables
    var $formMainEl = jQuery('.ampli-form-newsletter'),
        formData,
        //actionUrl = 'http://rdc-web.amplifyn.io/wp-content/themes/rcd/ampli-form.php',
        actionUrl = baseUrl + '/wp-content/themes/rcd/ampli-form.php',
        $formMessageEl = jQuery('#form-message-newsletter');

    $formMainEl.on('submit', function(event) {
        $formMessageEl.text('');
        event.preventDefault();
        //console.log('Newsletter clicked');

        if ($formMainEl.valid()) { // Check form is valid to submit data
            // Get all form fields data to an array
            formData = jQuery(this).serialize();

            //   console.log('Form event triggered');
            //   console.log(formData);

            // Send ajax request to send-mail.php with form data
            jQuery.ajax({
                type: 'post',
                url: actionUrl,
                data: formData,
                beforeSend: function() {
                    // Show ajax loader
                    jQuery('.form-loader').fadeIn(500);
                },
                success: function(response) {
                    $formMainEl.trigger('reset');
                    $formMessageEl.text('Your subscription was successful');

                    // Hide ajax loader
                    jQuery('.form-loader').fadeOut(700);

                },
                error: function(jqXHR, exception) {
                    console.log(jqXHR);
                    $formMessageEl.text('Opps! something went wrong.');

                }
            });
        }

    });

}

/**
 * Ampli form front-end validation
 */
function ampliFormValidation() {

    jQuery.validator.addClassRules({
        required: {
            required: true
        },
        name: {
            required: true,
            minlength: 2,
        },
        email: {
            required: true,
            email: true
        },
        contact: {
            required: true,
            number: true
        },
        message: {
            required: true,
            minlength: 2
        }
    });

}