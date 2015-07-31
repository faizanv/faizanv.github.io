var fb = new Firebase("https://tapcount.firebaseio.com");
var audio = new Audio('pew.mp3');
var countNum = 0;

fb.child("count").on("value", function(snapshot) {
  console.log(snapshot.val());
  count = snapshot.val();
  $("#countVal").text(snapshot.val());
  audio.play();
});

function go() {
  console.log("go");
  var submit = parseInt(count) + 1;
  fb.update({count: submit});
}

// $("#button").click(function() {
//   console.log("penis");
// });
