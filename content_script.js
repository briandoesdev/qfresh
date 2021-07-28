function refresh() {
	document.getElementById("_REFRESH_").click();
}

// tracker to see if user disables refreshing
qfreshEnabled = true;

var wait = 0;
while (wait === 0){};

var intervalId = setInterval(function(){
	if(!qfreshEnabled){
	   clearInterval(intervalId);
	}

	refresh();

 }, 2000);
