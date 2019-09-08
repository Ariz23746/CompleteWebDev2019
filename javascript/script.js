// var li = document.querySelectorAll("li")[4];
var button = document.getElementById("enter");
var userinput = document.getElementById("userinput");
var ul = document.querySelector("ul");


// button.addEventListener("click", function() {
// 	if (userinput.value.length > 0) {

// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(userinput.value));
// 		ul.appendChild(li);
// 		userinput.value = "";

// 	}
	
// });

// userinput.addEventListener("keypress",function(event) {
// 	if (userinput.value.length > 0 && event.keyCode === 13) {

// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(userinput.value));
// 		ul.appendChild(li);
// 		userinput.value = "";

// 	}
// })

// now as we are developer we need to make our code dry i.e dont repeat ourselves :-

function inputLength() {
	return userinput.value.length;
}

function CreateListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(userinput.value));
		ul.appendChild(li);
		userinput.value = "";

}

button.addEventListener("click", function() {
	if (inputLength() > 0) {
		CreateListElement();
	}
});

userinput.addEventListener("keypress",function(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		CreateListElement();
	}
});
