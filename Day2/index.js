const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask() {
	//this codde will help u alert that the input field can't be empty
	if (inputBox.value === "") {
		alert("You must Write Something!");
	} else {
		//this code is to take the text from the placeholder and place it down
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		//this code is to provide a star button so u can delete anytime u are done with task
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	//this code bellow is to make the place
	//holder empty after pressing the add button
	inputBox.value = "";
	//we are calling this funtion so it saves the task we are to do after wiriting it
	saveData();
}
// this is to cross the element when execusion of tasks has been done
listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			saveData();
			//this is to delete the task after complision
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
