var number = 50;
var intervalId;
$("#start").on("click", function(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  });
function decrement() {
    number--;
    $("#display").html("<h2>" + "00:"+ number + "</h2>");
    if (number === 0) {
    stop();
    };  
};
function stop() {
    clearInterval(intervalId);
};
run();
//add some questions 

//when the number ===0, trigger to open another page to show the score