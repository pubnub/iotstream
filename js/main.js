$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500);
    return false;
});

var introVideo = document.getElementById('introVideo');
//introVideo.onended = function () {
//    console.log("Ended");
//    introVideo.currentTime = 0;
//    introVideo.play();
//};

//$("#introVideo").on('ended', function(){
//    console.log("Ended");
//    console.log(introVideo.currentTime);
//    introVideo.currentTime = 607;
//    introVideo.play();
//})

//introVideo.addEventListener('ended', function () {
//    this.currentTime = 0;
//    this.play();
//}, false);
//
//introVideo.play();

// $('.moreSessionInfo:empty').each(function() {
//     $(this).removeClass("moreSessionInfo").closest('.singleSession').css("cursor","inherit");
//   });

// $( ".sessionInfo" ).click(function() {
//   $(this).closest('.singleSession').find(".moreSessionInfo").slideToggle( "fast", function() {
//   });
// });

