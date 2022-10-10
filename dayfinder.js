function day(){
	var d = document.getElementById('date').value;
	var m = document.getElementById('month').value;
	var y = document.getElementById('year').value;
	m = m - 1;
	var theDate = new Date()
	theDate.setDate(d)
	theDate.setMonth(m)
	theDate.setYear(y)
	var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	console.log(dayArray[theDate.getDay()]);
	document.getElementById("day").innerHTML= "The day is "+ dayArray[theDate.getDay()];
}