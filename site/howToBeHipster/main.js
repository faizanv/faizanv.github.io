var totalHipsterScore = 0;
var hipsterIndex = 0;
var totalImportantQuestions = questions.length;
var songs = [];

//Genre scale for each level of hipster
var genres = ["pop", "indie pop", "indie rock", "folk", "hipster"];
var genreCodes = [0, 0, 0, 0, 0]; //Code for genre in Music Dealers API 

$(function(){
	setUpSurvey();

	function setUpSurvey() {
		var HTMLinputStart = "<li><input type=\"radio\" name=\"";
		for(i = 0; i < questions.length; i++) {
			if(questions[i].type == "control1" || questions[i].type == "control2" || questions[i].type == "control3") {
				totalImportantQuestions--;
			}
			//Add question to HTML form
			var HTMLnameFor = "question" + i;
			$("#survey").append("<div class=\"questionBlock\">");
			$("#survey").append("<span class=\"question\">" + questions[i].question + "</span><ul>");
			if(questions[i].type == "normal" || questions[i].type == "anti2" || questions[i].type == "control3") {
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" id=\"" + HTMLnameFor + "\" value=\"1\"><label for=\"" + HTMLnameFor + "\">Nah Son</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"2\"><label for=\"" + HTMLnameFor + "\">Not Very Likely</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"3\"><label for=\"" + HTMLnameFor + "\">50/50</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"4\"><label for=\"" + HTMLnameFor + "\">ummmm Pretty Likely</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"5\"><label for=\"" + HTMLnameFor + "\">Do You Even Have To Ask?</label></li>");
			} else if(questions[i].type == "anti1") {
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"1\"><label for=\"" + HTMLnameFor + "\">I'm not a Hipster</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"2\"><label for=\"" + HTMLnameFor + "\">Is that the same thing as a Hippie?</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"3\"><label for=\"" + HTMLnameFor + "\">I shopped at Hot Topic before it was hot... I mean cool</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"4\"><label for=\"" + HTMLnameFor + "\">I eat the occassioinal kale salad</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"5\"><label for=\"" + HTMLnameFor + "\">100% Genuine Hipster</label></li>");
			} else if(questions[i].type == "anti3") {
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"5\"><label for=\"" + HTMLnameFor + "\">Ew</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"4\"><label for=\"" + HTMLnameFor + "\">I don't drink coffee</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"3\"><label for=\"" + HTMLnameFor + "\">I would love a frappacino right now!</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"2\"><label for=\"" + HTMLnameFor + "\">Craving it pretty badly</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"1\"><label for=\"" + HTMLnameFor + "\">Already halfway done with my double shot espresso... BLACK!</label></li>");
			} else if(questions[i].type == "normal1") {
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"1\"><label for=\"" + HTMLnameFor + "\">Miniscule</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"2\"><label for=\"" + HTMLnameFor + "\">Small</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"3\"><label for=\"" + HTMLnameFor + "\">Decently Sized</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"4\"><label for=\"" + HTMLnameFor + "\">Large</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"5\"><label for=\"" + HTMLnameFor + "\">My glasses aren't large you just don't get it</label></li>"); 
			}else if(questions[i].type == 'yesNo'){
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"5\"><label for=\"" + HTMLnameFor + "\">Yes</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"1\"><label for=\"" + HTMLnameFor + "\">No</label></li>");
			} else if(questions[i].type == 'control1'){
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">Not great at all</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">Meh</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">Okay</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">Great</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">As great as food places that don't dare to ask \"Is Pepsi Okay?\"</label></li>");
			} else if(questions[i].type == 'control2'){
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">1</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">2</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">3</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">4</label></li>");
				$("#survey").append(HTMLinputStart + HTMLnameFor + "\" value=\"0\"><label for=\"" + HTMLnameFor + "\">5</label></li>");
			}
			$("#survey").append("</ul></div>");
		}
		$("#survey").append("<input type=\"button\" onclick=\"calculateAndDoHipster()\" value=\"Submit\">");
	}

})

function calculateAndDoHipster() {
	$("#loading").css("display","block");
	$("#survey").css("display","none");
	calculateHipsterIndex();
	getHipsterMusic();
}

function playHipsterMusic() {
	$("#loading").addClass( "loader");
	$("#content").append("<p>You received a Hipster Index of <strong>" + hipsterIndex +  "</strong>/5.</p>");
	for(i = 0; i < songs.length; i++) {
		$("#content").append("<p><strong>" + songs[i].title + "</strong> - " + songs[i].artist_name + "</p>");
	}
}

function calculateHipsterIndex() {
	for(i = 0; i < questions.length; i++) {
		console.log(parseInt($("input:radio[name=question" + i + "]:checked").val()));
		totalHipsterScore += parseInt($("input:radio[name=question" + i + "]:checked").val());
	}
	hipsterIndex = Math.round(totalHipsterScore / totalImportantQuestions);
}

function getHipsterMusic() {
	var genre = genres[hipsterIndex - 1];

// var xhr = new XMLHttpRequest();
// xhr.open("POST", "https://private-anon-d150c1785-mdlrs.apiary-mock.com/authentication/login");
// xhr.onreadystatechange = function () {
//   if (this.readyState == 4) {
//     alert('Status: '+this.status+'\nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'\nBody: '+this.responseText);
//   }
// };
// xhr.send("Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryp7MA4YWxkTrZu0gW\n----WebKitFormBoundaryE19zNvXGzXaLvS5C\nContent-Disposition: form-data; name=\"username\"\nfvirani6@gatech.edu\n----WebKitFormBoundaryE19zNvXGzXaLvS5C\nContent-Disposition: form-data; name=\"password\"\nfv0404\n----WebKitFormBoundaryE19zNvXGzXaLvS5C");	

	//Authentication
		// $.ajax({
		//   type: "POST",
		//   url: "http://api.musicdealers.com/authentication/login",
		//   data: { username: "faizan.virani.44@gmail.com", password: "fv0404" },
		//   success: function(resp) {
		//   	console.log("music dealers success")
		//   	$.ajax({
		//   		type: "POST",
		//   		url: "http://api.musicdealers.com/songs/{1,1}",
		//   		data: genres,
		// 	});
		//   }
		// });


	$.ajax({
  url: "http://developer.echonest.com/api/v4/song/search",
  data: {
  	'api_key': 'KL8LOBUKZKX4SDIXK',
  	'results': '7',
  	'style': genre,
  	'sort': 'song_hotttnesss-asc'
  },
  dataType: 'json',
  success: function (resp) {
  	console.log("successful"),
  	songs = resp.response.songs;
  	playHipsterMusic();
  }
});
}
