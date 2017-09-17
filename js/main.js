$(document).ready(function() {
  $(".button-collapse").sideNav();
  var des = [
    "Intern at <span class='orange-text'>Amazon</span> Fall 2017",
    "<span class='yellow-text text-darken-2'>G</span>eorgia <span class='yellow-text text-darken-2'>T</span>ech Class of 2018",
    "<span class='yellow-text text-darken-2'>Snap Inc.</span> Summer 2017",
    "<span class='teal-text'>HackGT</span> Director",
    "Intern at <span class='teal-text'>SpaceX</span> Summer 2016",
    "Web Developer",
    "Builder",
    "<span class='purple-text text-darken-2'>Microsoft Imagine Cup</span> Finalist",
    "<span class='teal-text'>Node.js</span>",
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
