// DOM manipulation
// console.log(document.getElementById('title'));
// console.log(document instanceof HTMLDocument);

// Event handling
document.addEventListener("DOMContentLoaded", function (event) {

		function typename (event) {
			this.textContent = "Typed";
			var name = 
				document.getElementById("name").value
			var message = "<h2>Hello " + name + "!</h2>";

				document
					.getElementById("content")
					.innerHTML = message;

				if(name === "student"){
					var title = 
						document
							.querySelector("#title")
							.textContent;
						title += " I am ready to learn!";
						document
							.querySelector("h1")
							.textContent = title;
				}
		 }

		 document.querySelector("button")
		 	.addEventListener("click", typename);
    }
);

