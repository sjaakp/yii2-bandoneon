/*global jQuery, console */
/*jslint nomen: true, unparam: true, white: true */
/**
 * MIT licence
 * Version 1.0.2
 * Sjaak Priester, Amsterdam 02-08-2014 ... 01-03-2018.
 */

(function ( $ ) {
    "use strict";

    $.fn.bandoneon = function( options ) {

        var settings = $.extend({
            upDuration: 200,
            downDuration: 400
        }, options );

        return this.each(function() {
            var acc = $(this);

            acc.children(":even").click(function(evt) {
                var heading = $(this),
                    section = heading.next();
                if (heading.hasClass("open"))    {
                    section.slideUp(settings.upDuration);
                }
                else    {
                    section.slideDown(settings.downDuration);
                    acc.children(":odd").not(section).slideUp(settings.upDuration);
                    acc.children(":even").not(heading).removeClass("open");
                }
                heading.toggleClass("open");
            });
            acc.children(":even.open").each(function() {
                $(this).next().show();
            });
        });
    };
}( jQuery ));