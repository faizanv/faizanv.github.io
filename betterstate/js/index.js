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
        //var query= '?text='+encodeURIComponent(description);
        $.ajax({
            url: 'https://loudelement-free-natural-language-processing-service.p.mashape.com/nlp-text/?text=' + encodeURIComponent(message),
            headers: {
                "X-Mashape-Key": "9ibVh729CSmshWb3HHNJ8BrGFK6up18OdHdjsn4V3X42xD3JO7",
                "Accept" : "application/json"
            },
            error: function(e) {
                console.log(e);
            },
            success: function(data) {
                console.log(data["api-author"]);
                var score = data["sentiment-score"];
                var sentiment = data["sentiment-text"];
                fb.push({body: message, date: description, score: score, sentiment: sentiment});
            },
            type: 'GET'
        });
        //fb.push({body: message, date: description});
    }


    fb.on('child_added', function(snapshot) {
        var snap = snapshot.val();
        console.log(snap.date);
        $("#notif").prepend("<div class='message'><strong>Message: </strong>" + snap.date + "</br><strong>Detail: </strong>" + snap.body + "</div>");
    });

});
