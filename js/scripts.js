

$(document).ready(function(){



  var btn =$("#btnclick");
  var formpingpong =$("#pingpong");
  var warning =$("#warning");
  var arraygame=[];
  var index ;


  formpingpong.on("submit",function(event){
    var userinput = $("#inputNumber").val();

    if (userinput!="") {

      userinput=parseInt(userinput);
      //alert(userinput);
      for(index=0;index<=userinput;index++){
        arraygame.push(index);
        $("ul#results").prepend("<li>"+game(arraygame[index])+"</li>");

      }
      //alert(arraygame);


    }else{
      warning.text(" Add something in that input field");
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
