 window.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	function req(e) {
		e.preventDefault();
		let formData = new FormData (form);
		
		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
			
		});console.log(obj);

		let json = JSON.stringify(obj);

		console.log(json);

		const request = new XMLHttpRequest();
		request.open("POST", "http://localhost:3000/api/users/sign_up");
		request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		request.send(json);
		request.addEventListener("load", function(){
			if (request.readyState === 4 && request.status == 200) {
				let data = JSON.parse(request.response);
				console.log(data);


			} else {
				console.error("Что-то не так");
			}
		}); 
	} 

	form.addEventListener("submit", (e) => req(e));
})
