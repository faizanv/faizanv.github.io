var v1 = 600; //fridge
var v2 = 290; //television
var v3 = 50; //laptop
var v4 = 300; //desktop
var v5 = 375; //fan
var v6 = 200; //heater
var v7 = 1000; //microwave
var v8 = 100; //phone charger
var v9 = 300; //coffeemaker 
var wattsArr = [v1,v2,v3,v4,v5,v6,v7,v8,v9];
var totalperday = 0;
var kwhNC = .0915; //price per kwh

$(document).ready(function(){

   $("#hidden").hide();

});


function getData(){
	totalperday = 0;
	var i = 1;
	while(i<=9){
		var iden = "onOrNah" + i;
		var hr = "hour" + i;
		var check = document.getElementById(iden).checked;
			if (check){
				var kw = wattsArr[i-1]/1000;
				var hours = document.getElementById(hr).value;
				if (hours>24 || hours<0){
					var x = "Invalid input for hours";
					i = 10;
				}
				else if (isNumeric(hours)==false){
				 	var x = "Invalid input for hours";
				 	i = 10;
				}
				else{
				totalperday += kw*hours*kwhNC;
				}
			}
		i++;
	}
	if (x=="Invalid input for hours"){
		document.getElementById("result").innerHTML = x;
	}
	else{
		totalpermonth = Math.round((totalperday * 30.5)*100)/100;
		totalperyear = Math.round((totalpermonth * 12)*100)/100;
		totalperday = Math.round(totalperday*100)/100;
		document.getElementById("result").innerHTML = "$" + totalperday;
		document.getElementById("result2").innerHTML = "$" + totalpermonth;
		document.getElementById("result3").innerHTML = "$" + totalperyear;
	}
	$("#hidden").show();
	}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
