$(document).ready(function(){

let quiz = [{
    question: "What is my favourite fruit?",
    answers: ["Apples", "Pears", "Kiwi", "Mango"],
    correctAnswer: 3

  },
  {
    question: "The sun is which shape?",
    answers: ["Square", "Round", "Triangular", "Rectangular"],
    correctAnswer: 1

  },
  {
    question: "Jack Russels are what size dog?",
    answers: ["small", "medium", "large", "massive"],
    correctAnswer: 0
  }
];


let i = 0;

// let j = 0;
for (object of quiz) {
  var appels = object.question;
  var pere = object.answers;

  $('#totalQ').append('<h2>' + appels + '</h2>');

let j = 0;

  for (options of pere) {
    $('#totalQ').append('<input type="radio" name="'+i+'" value="'+j+'">' + options + '</input>' );


j++;

  }
i++;



}

$('#totalQ').submit(function( event)  {

  event.preventDefault();
  let userData =  $(this).serializeArray() ;

console.log(userData);
let k = 0;
var finalScore = 0;

for (returnedAnswer of userData) {


  if (returnedAnswer.value == quiz[k].correctAnswer) {


    finalScore++;






  };



  k++;
  }
  if (finalScore >= 2) {
    document.write("GENIUS")
  } else {
    document.write("average")

  };

//document.write(finalScore);


})


});







// // ('<input type="radio" name="option"' + pere + '</input>' )
// function questionzzz() {
// var finalScore = 0;
//
//
// };
