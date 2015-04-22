$("#send").click(
    send()
);

$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        send()
    }
});

function send() {
    var message = $("#msg").val();
    if (message.trim()) {
        $("#msg").val('');
        var submit = {
            'where': {
                'appName': 'CampMo'
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
