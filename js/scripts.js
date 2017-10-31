// //business logic
// var userNumber;
//
// var numberArr = [];
//
// var pingPongFunc = function (number) {
//     for (var i = 1; i <= number; i++) {
//         if (i % 15 === 0) {
//             numberArr.push("pingpong");
//         } else if (i % 5 === 0) {
//             numberArr.push("pong");
//         } else if (i % 3 === 0) {
//             numberArr.push("ping");
//         } else {
//             numberArr.push(i);
//         }
//     }
// };
// //userinterface mate
// $(document).ready(function () {
//     $('form#pingpong').submit(function (event) {
//         event.preventDefault();
//         var number = parseInt($('input#inputNumber').val());
//         $('#results').text(" ");
//         pingPongFunc(number);
//         numberArr.forEach(function (number) {
//             $('#results').append('<li>' + number + '<li>');
//         });
//     });
// });

$(document).ready(function(){
  var userinput = $("#inputNumber").val();
  var btn =$("#btnclick");
  var formpingpong =$("#pingpong");
  var warning =$("#warning");
  var arraygame=[];
  var index ;


  formpingpong.submit(function(event){

    if (userinput!="") {
      userinput=parseInt(userinput);
      //alert(userinput);
      for(index=0;index<=userinput;index++){
        arraygame.push(index);
        $("ul#results").prepend("<li>"+game(arraygame[index])+"</li>");

      }


    }else{
      warning.text("Yo.Human Add some shit on that input field");
    }
    event.preventDefault()
  });
  btn.click(function(){

  });

  function game(value){
      if (value%15===0) {
        return "pingpong";
      }else if(value%5===0){
        return "pong";
      }else if(value%3===0){
        return "ping";
      }else{
        return value;
      }
  }


});
