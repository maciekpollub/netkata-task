$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 1000);
        return false;
    });
});