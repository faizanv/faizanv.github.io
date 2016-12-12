$(document).ready(function() {
  $(".button-collapse").sideNav();
  var des = [
    "I can follow API documentation",
    "I go to hackathons",
    "I can make Android apps",
    "I can node.js",
    "I direct HackGT",
    "I go to Georgia Tech",
    "I can't design"
  ];
  var index = Math.floor(Math.random() * des.length);
  function randomGerund() {
    if (index >= des.length) {
      index = 0;
    }
    $('#descriptionHeader').css({opacity: 1, visibility: "hidden"}).animate({opacity: 0}, 1000, function() {
      $('#descriptionHeader').html(des[index]);
    });
    $('#descriptionHeader').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 2000);
    index++;
  }
  (function changeWords() {
    // setInterval(randomGerund, 1000);
    window.setInterval(function(){
      randomGerund()
    }, 3000);
  })();
});
