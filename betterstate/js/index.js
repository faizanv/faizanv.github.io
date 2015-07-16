$(document).ready(function() {
    var fb = new Firebase('https://to-a-better-state.firebaseio.com/');

    $("#send").click(function() {
        send()
    });

    $("input").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#send").click();
        }
    });

    function send() {
        var message = $("#msg").val();
        var description = $("#description").val();
        fb.push({body: message, date: description});
    }


    fb.on('child_added', function(snapshot) {
        var snap = snapshot.val();
        console.log(snap.date);
        $("#notif").prepend("<div class='message'><strong>Message: </strong>" + snap.date + "</br><strong>Detail: </strong>" + snap.body + "</div>");
    });

});
