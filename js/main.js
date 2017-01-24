var carousel;
$(document).ready(function() {
  carousel = $("ul");
    carousel.itemslide();
  $(".button-collapse").sideNav();
  var des = [
    "I can follow documentation",
    "I go to hackathons",
    "I worked at SpaceX",
    "I can Android",
    "I'm a Yellow Jacket",
    "I can node.js",
    "I direct HackGT",
    "I go to Georgia Tech",
    "I can't design",
    "I will work at Snapchat"
  ];
    var i = 0;
    (function runIt() {
        i++;
        $('#original').fadeOut(1500, function() {
            $('#original').html(des[i % des.length]);
            $('#original').fadeIn(1500, function() {
                runIt()
            });
        });
    }());

});
