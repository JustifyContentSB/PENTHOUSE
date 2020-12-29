let orderClass = document.querySelectorAll('.order__class');
for(let i = 0; i < orderClass.length; i++) {
	for(let y = 0; y < 50; y++) {
		orderClass[i].innerHTML += '.';
	}
}