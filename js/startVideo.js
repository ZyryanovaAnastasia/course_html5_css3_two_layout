var video = document.querySelector("#video"),
    button = document.querySelector("#btn_play");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-content-btn_play").click(function() {
  $(".video-content").addClass('video-content--hide');
  $(".video-play").addClass('video-play-hide');
})