// viewcount	
const counter = document.querySelector(".counter-number");
	async function updateCounter() {
			let response = await fetch("https://pxdfv2lutuqkjmsixke35idlry0pkpce.lambda-url.us-east-1.on.aws/");
			let data = await response.json();
			counter.innerHTML = 'views: ${data}';
}

updateCounter();