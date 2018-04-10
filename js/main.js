import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/style2.css';

$(document).ready(function() {
  $(".button-collapse").sideNav();
  var des = [
    "<span class='teal-text'>Node.js</span>",
    "New Grad Software Engineer at <span class='pink-text text-lighten-2'>Lyft</span>",
    "Intern at <span class='orange-text'>Amazon</span> Fall 2017",
    "<span class='yellow-text text-darken-2'>G</span>eorgia <span class='yellow-text text-darken-2'>T</span>ech Class of 2018",
    "<span class='yellow-text text-darken-2'>Snap Inc.</span> Summer 2017",
    "<span class='teal-text'>HackGT</span> Director",
    "Intern at <span class='teal-text'>SpaceX</span> Summer 2016",
    "Web Developer",
    "Builder",
    "<span class='purple-text text-darken-2'>Microsoft Imagine Cup</span> Finalist"
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
