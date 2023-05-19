var day
var month
var year
var days_in_month
var dayvalidationMessage = document.getElementById('dayvalidationMessage');
var monthvalidationMessage = document.getElementById('monthvalidationMessage');
var yearvalidationMessage = document.getElementById('yearvalidationMessage');

var today = new Date()

var this_year = today.getFullYear()
var this_day = today.getDate()
var this_month = today.getMonth()


$(document).on('click', "button", handleClick);

function handleClick(event) {
    event.preventDefault(); // Prevent form submission

    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;

    if (day === "" && month === "" && year === "") {
        dayvalidationMessage.textContent = 'This field is required';
        dayvalidationMessage.style.display = "block";
        monthvalidationMessage.textContent = 'This field is required';
        monthvalidationMessage.style.display = 'block';
        yearvalidationMessage.textContent = 'This field is required';
        yearvalidationMessage.style.display = 'block';
        return;
    } else if (day === "") {
        dayvalidationMessage.textContent = 'This field is required';
        dayvalidationMessage.style.display = 'block';
        return;
    } else if (month > 12) {
        monthvalidationMessage.textContent = 'Must be a valid month';
        monthvalidationMessage.style.display = 'block';
        return;
    } else if (year > this_year) {
        yearvalidationMessage.textContent = 'Year must be less than ' + this_year;
        yearvalidationMessage.style.display = 'block';
        return;
    } else if ((((month) == "09" || (month) == "04" || (month) == "06" || (month) == "11") && (day > 30 || day < 1)) || (((month) == "02" && (day > 29 || day < 1))) || (((month) == "01" || (month) == "03" || (month) == "05" || (month) == "7") || (month) == "8" || (month) == "10" || (month) == "12") && (day > 31 || day < 1)) {
        dayvalidationMessage.textContent = 'Must be valid date';
        dayvalidationMessage.style.display = 'block'
        return;
    } else if (month === "") {
        monthvalidationMessage.textContent = 'This field is required';
        monthvalidationMessage.style.display = 'block';
        return; // Stop further execution
    
    } else if (year === "") {
        yearvalidationMessage.textContent = 'This field is required';
        yearvalidationMessage.style.display = 'block';
        return; // Stop further execution
    }

    dayvalidationMessage.style.display = 'none';
    monthvalidationMessage.style.display = 'none';
    yearvalidationMessage.style.display = 'none';
    // form.reset();

    console.log(today.getDate())
    calculate_days_in_month(month)
    calculate_days()
    calculate_months()
    calculate_years()
}

function calculate_days_in_month(this_month) {
    if ((this_month-1) == "09" || month == "04" || month == "06" || month == "11") {
        days_in_month = 30
    } else if ((this_month-1) == "02") {
        days_in_month = 28
    } else {
        (days_in_month) = 31
    }
}

function calculate_years() {
    if (month < (this_month + 1)) {
        $(".textbg .year").text((this_year - year));
    } else if (month <= (this_month + 1) && day < this_day) {
        $(".textbg .year").text((this_year - year));
    } else {
        $(".textbg .year").text((this_year - year)-1);
    }
}

function calculate_days() {
    if (day == this_day) {
        $(".textbg .day").text('01')
    } else if (day > this_day && day <= days_in_month && day != 0) {
        $(".textbg .day").text((days_in_month - (day - this_day))+1)
    } else if (day < this_day && day <= days_in_month && day != 0) {
        $(".textbg .day").text(((this_day - day)) + 1)
    }
}

function calculate_months() {
    if (month == this_month+1) {
        $(".textbg .month").text('00')
    } else if (month > this_month+1 && month <= 12 && month != 0 && this_day < day) {
        $(".textbg .month").text((12 - (month - (this_month+1)))-1)
    }  else if (month > this_month+1 && month <= 12 && month != 0 && this_day >= day) {
        $(".textbg .month").text((12 - (month - (this_month+1))))
    } else if (month < (this_month+1) && month <= 12 && month != 0 && this_day < day) {
        $(".textbg .month").text(((this_month+1) - month) - 1)
    } else if (month < (this_month+1) && month <= 12 && month != 0 && this_day >= day) {
        $(".textbg .month").text((this_month+1) - month)
    }
}