let currentDate = new Date();
module.exports.date = currentDate

function day () {
let day = currentDate.getDay();
if (day == 1) return ' today is Monday';
if (day == 2) return ' today is Tuesday';
if (day == 3) return ' today is Wednesday';
if (day == 4) return ' today is Thursday';
if (day == 5) return ' today is Friday';
if (day == 6) return ' today is Saturday';
if (day == 7) return ' today is Sunday';
}

module.exports.getMessage = function (name) {
	let hour = currentDate.getHours();
	if (hour > 16) return 'Good evening, ' + name + day() + '\n';
	if (hour > 10) return 'Good afrernoon, ' + name + day() + '\n';
	else return 'Good morning, ' + name + day() + '\n';
}