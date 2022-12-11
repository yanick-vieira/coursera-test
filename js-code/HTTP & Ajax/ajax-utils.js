( function (global) {

// set a namespace for our utility
	var ajaxUtils = {};

// returns an HTP request object
	function getRequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			return (new ActiveXObeject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is ont supported!");
			return(null);
		}
	}

// requesURL
	ajaxUtils.sendGetRequest = 
	function(requestURL, responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = 
		function() {
			handleResponse(request, responseHandler);
		};
		request.open("GET", requestURL, true);
		request.send(null); //for POST
	}

// not an error
	function handleResponse(request, responseHandler){
		if((request.readyState == 4) && (request.status == 200)){
			responseHandler(request);
		}
	}

// global object
	global.$ajaxUtils = ajaxUtils;

 })(window);