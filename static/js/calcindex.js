
// var i = 0

// while (i < $(".button").length) {
//     $(".button")[i].addEventListener("click", handleClick); i++;
// }

// function handleClick() {
//     var buttonInnerHTML = this.innerHTML;
    
    
//     buttonAnimation(buttonInnerHTML)
// }

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

$(document).on("click", ".button", handleClick);

document.addEventListener('keypress', function (event) {
    var key = event.key;
    buttonAnimation(key)
})

function handleClick() {
    var buttonInnerHTML = $(this).html();
    buttonAnimation(buttonInnerHTML);
    updateScreen(buttonInnerHTML)
    

    
}

function buttonAnimation(currentKey) {
    var activeButton = $("button[data-value='"+ currentKey + "']");
    activeButton.addClass('pressed');
    setTimeout(function() {
        activeButton.removeClass('pressed');
    }, 100);
}

var num1 = "";
var num2 = "";
var operator = "";
var answer = "";

function caculator(num1, num2, operator) {
    return operator(num1, num2);
}

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function updateScreen (key) {   
    var currentText = $('.calculatorScreen h1').text();

    if (key === "AC") {
        $('.calculatorScreen h1').text("0");
    } else if (key === "÷") {
        num1 = parseFloat($('.calculatorScreen h1').text());
        operator = divide
        $('.calculatorScreen h1').text("0");
    } else if (key === "+") {
        num1 = parseFloat($('.calculatorScreen h1').text());
        operator = add
        $('.calculatorScreen h1').text("0");
    } else if (key === "-") {
        num1 = parseFloat($('.calculatorScreen h1').text());
        operator = subtract
        $('.calculatorScreen h1').text("0");
    } else if (key === "×") {
        num1 = parseFloat($('.calculatorScreen h1').text());
        operator = multiply
        $('.calculatorScreen h1').text("0");
    } else if (key === "%") {
        var percent = parseFloat($('.calculatorScreen h1').text()) / 100;
        $('.calculatorScreen h1').text(percent);
        num1 = parseFloat($('.calculatorScreen h1').text());
    } else if (key === ".") {
        $('.calculatorScreen h1').text(currentText+key);
        num1 = parseFloat($('.calculatorScreen h1').text());
    } else if (key === "=") {
        num2 = parseFloat($('.calculatorScreen h1').text());
        answer = caculator(num1, num2, operator);
        $('.calculatorScreen h1').text(answer);
    } else if (key === "±") {
        if (parseFloat($('.calculatorScreen h1').text()) > 0) {
            $('.calculatorScreen h1').text("-"+currentText);    
        } else {
            $('.calculatorScreen h1').text();
        }
    } else if (currentText != "0") {
        currentText += key;
        $('.calculatorScreen h1').text(currentText);
    } else {
        $('.calculatorScreen h1').text(key);
    }
    
    
}
