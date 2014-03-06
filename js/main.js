$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
            $("#wrapper").addClass("scrolled-1");
        } else {
            $("#wrapper").removeClass("scrolled-1");
        }
    });
});