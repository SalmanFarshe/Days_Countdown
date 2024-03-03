var targetDate = new Date("jan 01, 2025");
var month = document.querySelector(".month");
var the_time = document.querySelector(".the-time")
// var year = document.querySelector(".year");
function countDown() {
    var currentdate = new Date();
	var dateDifference = targetDate - currentdate;
	var hours = document.querySelector(".hours");
	var minutes = document.querySelector(".minutes");
	var second = document.querySelector(".second");
    var day = document.querySelector(".day");

	// year.innerHTML = `${targetDate.getFullYear()}`;
	day.innerHTML = `${Math.floor(dateDifference / 1000 / 86400)}`;
	hours.innerHTML = `${Math.floor((dateDifference / 1000 / 3600) % 24)}`; //getting the remaining hourse so that we can get the actual count down
	minutes.innerHTML = `${Math.floor((dateDifference / 1000 / 60) % 60)}`;
	second.innerHTML = `${Math.floor((dateDifference / 1000) % 60)}`;
}
countDown();
setInterval(countDown, 1000);

if (targetDate.getMonth() == 0) {
	the_time.innerHTML = `January`;
} else if (targetDate.getMonth() == 1) {
	the_time.innerHTML = `February`;
} else if (targetDate.getMonth() == 2) {
	the_time.innerHTML = `March`;
} else if (targetDate.getMonth() == 3) {
	the_time.innerHTML = `April`;
} else if (targetDate.getMonth() == 4) {
	the_time.innerHTML = `May`;
} else if (targetDate.getMonth() == 5) {
	the_time.innerHTML = `June`;
} else if (targetDate.getMonth() == 6) {
	the_time.innerHTML = `July`;
} else if (targetDate.getMonth() == 7) {
	the_time.innerHTML = `August`;
} else if (targetDate.getMonth() == 8) {
	the_time.innerHTML = `September`;
} else if (targetDate.getMonth() == 9) {
	the_time.innerHTML = `October`;
} else if (targetDate.getMonth() == 10) {
	the_time.innerHTML = `November`;
} else if (targetDate.getMonth() == 11) {
	the_time.innerHTML = `December`;
} else {
	month.innerHTML = `Nan`;
}
the_time.innerHTML += " " + `${targetDate.getDate()}` + " " + `${targetDate.getFullYear()}`
