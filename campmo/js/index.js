$(document).ready(function() {
    var fb = new Firebase('https://camp-mosaic.firebaseio.com/');

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
        var d = new Date();
        var dat = d.toLocaleString();
        fb.push({sender: "admin", msg: message, detail: description, date: dat});
        if (message.trim()) {
            $("#msg").val('');
            $("#description").val('');
            var submit = {
                'where': {
                    'deviceType': 'android'
                },
                'data': {
                    'alert': message
                }
            };
            submit = JSON.stringify(submit);
            console.log(submit);
            $.ajax({
                url: 'https://api.parse.com/1/push',
                headers: {
                    "X-Parse-Application-Id": "PkhBXQHKFDqNVNgsnYrNYVLOiFfdWkPpVCx1173K",
                    "X-Parse-REST-API-Key": "lbncgY1nEvxvLAI41rLqE8YmKvT37wCIyPOznPxb",
                    "Content-Type": "application/json"
                },
                data: submit,
                error: function(e) {
                    console.log(e);
                },
                success: function(data) {
                    console.log("Notification sent");
                },
                type: 'POST'
            });
        }
    }


    fb.on('child_added', function(snapshot) {
        var snap = snapshot.val();
        console.log(snap.msg);
        $("#notif").prepend("<div class='message'><strong>Message: </strong>" + snap.msg + "</br><strong>Detail: </strong>" + snap.detail + "</div>");
    });

});
