/* Timer helper functions */
var start;
var end;

function startTimer() {
	start = new Date();
}

function endTimer() {
	end = new Date();
}

function getMilliseconds() {
	return end.getTime() - start.getTime();
}

/* Test parameters */
var elements = 3;

/* Test data helper functions */
function getTestData() {
	var a = [];
	for (var i = elements; i >= 0; i--) {
		a[i] = i + 1;
	}
	return a;
}

/* Test cases */
function Process(data) {
	return data * data;
}

function test_forClassic() {
	var a = getTestData();
	startTimer();
	for (var i = 0; i < a.length; i++) {
		Process(a[i]);
	}
	endTimer();
	console.log("Classic for loop: " + getMilliseconds() + "ms");
}

function test_forLength() {
	var a = getTestData();
	startTimer();
	for (var i = 0, len = a.length; i < len; i++) {
		Process(a[i]);
	}
	endTimer();
	console.log("For loop with length cached: " + getMilliseconds() + "ms");
}

function test_forShort() {
	var a = getTestData();
	startTimer();
	for (var i = 0, item; item = a[i++];) {
		Process(item);
	}
	endTimer();
	console.log("For loop with short signature: " + getMilliseconds() + "ms");
}