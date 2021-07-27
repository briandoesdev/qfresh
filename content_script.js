function refresh() {
	document.getElementById("addbtn").click();
}

// tracker to see if user disables refreshing
qfreshEnabled = true;

var intervalId = setInterval(function(){
	if(!qfreshEnabled){
	   clearInterval(intervalId);
	}

	refresh();

 }, 60000);

// start our refresh
intervalId();
