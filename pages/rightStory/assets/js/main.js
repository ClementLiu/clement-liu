/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();

	$('#Demo p span:even').hide();
    $("input[type='checkbox']").click(function() {
        /* body... */
        if ($(this).is(":checked")) {
            // $("[alt='" + $(this).parent().prev().text() + "']").css('display', 'initial');
            // $("[alt='" + $(this).nextAll().eq(2).text() + "']").show('fast');
            $("[alt='" + $(this).nextAll().eq(2).text() + " new']").css('display', 'initial');
            $("[alt='" + $(this).nextAll().eq(2).text() + "']").hide('fast');

            // console.log($(this).nextAll().eq(2).text());
            // it is checked
        } else {
            $("[alt='" + $(this).nextAll().eq(2).text() + " new']").hide('fast');
            $("[alt='" + $(this).nextAll().eq(2).text() + "']").show('fast');

        }

    });

})(jQuery);