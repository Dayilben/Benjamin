document.getElementById('calculator').addEventListener('submit', function(event) {
	event.preventDefault();

	var courses = document.getElementById('courses').value;
	var credits = document.getElementById('credits').value;
	var grades = document.getElementById('grades').value;

	var cgpa = (grades / credits) * 10;

	document.getElementById('result').textContent = 'CGPA: ' + cgpa.toFixed(2);
});