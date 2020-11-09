// get each submit button element
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');

// declare a function that toggles display style of question divs
// the function takes an argument which should be THE NEXT QUESTION number
function nextQuestion(question_number) {

  //get the last question number (the argument passed minus 1!)
  var current_question_number = question_number - 1;

  //turn both question number vars into strings
  var question_number = question_number.toString();
  var current_question_number = current_question_number.toString();

  //get the next question div element (concatenate next q number onto to 'question-')
  var el = document.getElementById('question-'+question_number);

  //get the current question div element
  var el2 = document.getElementById('question-'+current_question_number);
  
  //display next question
  el.style.display = "block";

  //hide current question
  el2.style.display = "none";
}

//add event listeners to each submit button element and call nextQuestion function on click. Also calling function to grow progress bar.
submit1.addEventListener('click', function() {
  nextQuestion(2);
  growProgressBar('20%');
});

submit2.addEventListener('click', function() {
  nextQuestion(3);
  growProgressBar('40%');
});

submit3.addEventListener('click', function() {
  nextQuestion(4);
  growProgressBar('60%');
});

submit4.addEventListener('click', function() {
  nextQuestion(5);
  growProgressBar('80%');
});

submit5.addEventListener('click', function() {
  nextQuestion(6);
  growProgressBar('100%');
});





/*Pretty things -----------------------------------------------------------------*/

function growProgressBar(percentage_width) {
  var bar = document.getElementById("progress_bar");
  bar.style.width = percentage_width;
}

