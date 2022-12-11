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
	function(requestURL, responseHandler, isJsonResponse){
		var request = getRequestObject();
		request.onreadystatechange = 
		function() {
			handleResponse(request, responseHandler, isJsonResponse);
		};
		request.open("GET", requestURL, true);
		request.send(null); //for POST
	}

// not an error
	function handleResponse(request, responseHandler){
		if((request.readyState == 4) && (request.status == 200)){
			if (isJsonResponse == undefined){
				isJsonResponse = true;
			}
			if (isJsonResponse){
				responseHandler(JSON.parse(request.responseText))
			}
			else{
				responseHandler(request.responseText);
			}
		}
	}

// global object
	global.$ajaxUtils = ajaxUtils;

 })(window);