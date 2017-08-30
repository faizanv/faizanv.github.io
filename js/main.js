$(document).ready(function() {
  $(".button-collapse").sideNav();
  var des = [
    "I can write code",
    "I can follow documentation",
    "I work at <span class='orange-text'>Amazon</span>",
    "I go to <span class='yellow-text text-darken-2'>G</span>eorgia <span class='yellow-text text-darken-2'>T</span>ech",
    "I worked at <span class='yellow-text text-darken-2'>Snap Inc.</span>",
    "I direct <span class='teal-text'>HackGT</span>",
    "I worked at <span class='teal-text'>SpaceX</span>",
    "I can write code",
    "I can't design",
    "I'm a <span class='yellow-text text-darken-2'>Yellow</span> Jacket",
    "I can <span class='teal-text'>node.js</span>",
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
