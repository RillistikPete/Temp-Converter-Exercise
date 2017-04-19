function toCelcius(val) {
	var	fahrenheit = val * 1.8 + 32;
	changeColor(fahrenheit, "Celcius");
	return fahrenheit;

}

function toFahrenheit (val) {
	var celcius = (val - 32) * (5/9);
	changeColor(celcius, "fahrenheit");
	return celcius;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var button2 = document.getElementById("clearer");
var inputValue = document.getElementById("inputValue");
var fahr = document.getElementById("fahr");
var celc = document.getElementById("celc");
var result = document.getElementById("result");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
		if (fahr.checked === true){
			fahrenheit = toFahrenheit(inputValue.value);
			result.innerHTML = fahrenheit + ' degrees celcius';
		} else if (celc.checked === true) {
			celcius = toCelcius(inputValue.value);
			result.innerHTML = celcius + ' degrees fahrenheit';
		} else {
			alert("You need to select a conversion type");
		}
  console.log("event", clickEvent);

}

function clearFields (clickEvent){
	inputValue.value = '';
}

inputValue.addEventListener("keyup", function(e) {
	console.log("keyup", e.keyCode);
	if (e.keyCode === 13){
		determineConverter();
	}
});

function changeColor(temp, type){
	console.log(temp, type);
	if(type === "fahrenheit"){
		if(temp > 90){
			result.style.color = "red";
		}else if(temp < 32){
			result.style.color = "blue";
		}else{
			result.style.color = "green";
		}
	}
	if(type === "Celcius"){
		if(temp > 32){
			result.style.color = "red";
		}else if(temp < 0){
			result.style.color = "blue";
		}else{
			result.style.color = "green";
		}
	}
}


//----------------------------------------------------------------------------//

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Assign a function that clears fields when the button is clicked
button2.addEventListener("click", clearFields);





