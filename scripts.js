//business logic
var userNumber;

var numberArr = [];

var pingPongFunc = function (number) {
    for (var i = 1; i <= number; i++) {
        if (i % 15 === 0) {
            numberArr.push("pingpong");
        } else if (i % 5 === 0) {
            numberArr.push("pong");
        } else if (i % 3 === 0) {
            numberArr.push("ping");
        } else {
            numberArr.push(i);
        }
    }
};
//userinterface mate
$(document).ready(function () {
    $('form#pingpong').submit(function (event) {
        event.preventDefault();
        var number = parseInt($('input#inputNumber').val());
        $('#results').text(" ");
        pingPongFunc(number);
        numberArr.forEach(function (number) {
            $('#results').append('<li>' + number + '<li>');
        });
    });
});
