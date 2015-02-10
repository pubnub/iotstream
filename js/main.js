$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500);
    return false;
});

$(".schedule > div").click(function(){
    $(".description").addClass("hidden");
    $(this).children(".description").removeClass("hidden");
});

