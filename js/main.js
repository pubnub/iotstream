$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// $('.moreSessionInfo:empty').each(function() {
//     $(this).removeClass("moreSessionInfo").closest('.singleSession').css("cursor","inherit");
//   });

// $( ".sessionInfo" ).click(function() {
//   $(this).closest('.singleSession').find(".moreSessionInfo").slideToggle( "fast", function() {
//   });
// });

