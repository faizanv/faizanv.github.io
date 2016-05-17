$(document).ready(function() {
  // $('#fade1').hide();

  // $('#fade1').animate({visibility: visible;}, "slow");
  $('#fade1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1000, function() {
    $('#fade2').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1000, function () {
      changeWords();
      $('#fade3').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1000, function() {
        $('#fade4').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1000, function() {
          $('#fade5').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 1000);
        });
      });
    });
  });

  $('.thumbnail').hover(function() {
    $(this).animate({opacity: .7});
  },
  function() {
    $(this).animate({
      opacity: 1
    });
  });


  $('#scrollButton').click(function() {
    $('html, body').animate({
      scrollTop: $("#stopHere").offset().top
    }, 1000);
  });

  var gerunds = ["Coding", "Ballin'", "Node.js", "Developing", "Hacking", "Guessing", "Android", "HackGT", "JavaScript"];
  var index = Math.floor(Math.random() * gerunds.length);
  function randomGerund() {
    if (index >= gerunds.length) {
      index = 0;
    }
    $("#gerund").html(gerunds[index]);
    index++;
  }
  function changeWords() {
    setInterval(randomGerund, 1000);
  }
  //window.setInterval(randomGerund, 1000);

});
