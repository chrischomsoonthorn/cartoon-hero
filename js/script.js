// So what does the function below do? Well firstly. it looks for the id 'para1' and finds it's current class name. This is then stored into the variable currentClassName. Then an IF statement is used to simply change that class name based on what the current class name is. 

var doCoolStuff = function () {
	var currentClassName = document.getElementById('para1').className;

	if (currentClassName == 'cool') {
		document.getElementById('para1').className = 'cool red';
	} else{
		document.getElementById('para1').className = 'cool';
	}
	// changing class name
	// document.getElementById('para1').className = 'cool red';
}

var changeFontSize1 = function () {
	var currentFontSize = document.getElementById('sizechange1').className;

	if (currentFontSize == 'font1') {
		document.getElementById('sizechange1').className = 'font1 large'
	} else{
		document.getElementById('sizechange1').className = 'font1'
	}
}

var myCar = {
	make: 'Nissan',
	type: 'Qashqai',
	color: 'Storm White',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car ' + isOn)
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};

console.log('hello there friends');

// Below is quite a complicated function which is all based around the state which the body is currently on. When the changeState function is run with the corresponding 'state' which is stored in the HTML code, the function changes the body class to the new class, which is literally 'bodystate' as text concatenated with the number in the changeState function (). In addition to this, a clearInterval function is run to clear the timer.

// After this, there is an IF function, which checks first if the state is equal to 2. In this case, the state being 2 would indicate we are in the countdown state. Therefore, a timer is set up which is a 'setInterval' which effectively repeats a function every set time period. In this case that set period is 1000ms, or 1s. 

// That repeated function simply finds the inner HTML value of the element with the ID 'countdown1', which is the countdown heading element and sets that value to equal the variable 'countdownNumber', which is equal to 10. Then, the variable countdownNumber has 1 subtracted from it in the same line, which means the next time the formula runs, the value of that number is 1 less; 9. 

// This will keep repeating until it hits another if function, which checks if the countdownNumber is less than or equal to 0. If this is true, then it will change the state to state 3, which is the launch state. 


var timer = null;
var countdownNumber = 10;

var changeState = function(state) {
	document.body.className = "bodystate" + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById("countdown1").innerHTML = countdownNumber;

	if(state == 2) {
		timer = setInterval(function(){
			countdownNumber = countdownNumber -1;
			document.getElementById("countdown1").innerHTML = countdownNumber; 
			if (countdownNumber <= 0) {
				changeState(3);
			}
		}, 300);
	} else if (state == 3) {
		var success = setTimeout(function(){
			var randomNumber = Math.round(Math.random()*10);

			if(randomNumber > 5){
				changeState(4);
			} else {
				changeState(5);
			}
		}, 2000);
	}
}
