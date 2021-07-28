var btn = document.getElementById("enable");

function runner() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
    });

	wait = document.getElementById("duration").value;
}

function disable() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
			code: 'qfreshEnabled = false;'
		});
    });
}

function btnClick() {

	if (btn.textContent === "Enable") {
		var enabled = false;
	} else {
		var enabled = true;
	}
	
	if (!enabled) {
		runner()
		btn.textContent = "Disable";
	}
	else {
		disable()
		btn.textContent = "Enable";
	}
}

btn.addEventListener('click', btnClick);