$(document).ready(function() {


//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//use the array to add values to the <select> menu by using a for loop
for (i=0; i<cities.length; i++) {
//Use $.append() in your iteration on the drop-down menu	
	$("#city-type").append('<option>' + cities[i] + '</option>');
}

//Use the $.change event handler to capture user actions
$('select').change(function(){


//Get the value of user input using $.val()
	var userCity=$("#city-type").val();

//When the user changes the input of the drop-down, update the background image based on what they selected
//Use conditionals to control the flow of your application

		if (userCity === 'NYC'){
			//Use the $.attr() function to update html classes
		$('body').attr('class','nyc');
	}

		if (userCity === 'SF'){
		$('body').attr('class','sf');
	}

		if (userCity === 'LA'){
		$('body').attr('class','la');
	}

		if (userCity === 'ATX'){
		$('body').attr('class','austin');
	}

		if (userCity === 'SYD'){
		$('body').attr('class','sydney');
	}

})
});