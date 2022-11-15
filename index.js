getData = (event) => {
	event.preventDefault();
	const data = new FormData(event.target);
	const FormObj = Object.fromEntries(data);
	// console.log(FormObj);
	return FormObj;
};

handleSubmit = (event) => {
	event.preventDefault();
	const data = new FormData(event.target);
	const FormObj = Object.fromEntries(data);
	var list = document.getElementById("taskList");

	list.innerHTML += "<li>" + FormObj.task + "</li>";
};

var formListener = document.getElementById("todoForm");
formListener.addEventListener("submit", handleSubmit);

function remove(el) {
	var element = el;
	element.remove();
}
