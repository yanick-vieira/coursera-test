document.addEventListener("DOMContentLoaded", function(event) { 

	document.querySelector("button")
		.addEventListener("click", function() {
			var self = this;
			var name = "";

			$ajaxUtils
				.sendGetRequest("/data/name.json", function (res){
				var message =
				res.firstName + "" + res.lastName
				if(res.likesKoreanFood){
					message += "likes Korean food";
				}
					else{
						message += "doesn´t like korean food"
					}
					message += "ans uss";
					message += res.numberOfDisplays + 1;
					message += "displays for coding";

					document.querySelector("#content")
					.innerHTML = "<h2>Hello " + message + "</h2>";
				});

			
		});
});
 