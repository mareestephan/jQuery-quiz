$(document).ready(function() {

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


  for (object of quiz) {
    var questions = object.question;
    var multiAnswers = object.answers;

    $('#totalQ').append('<h2>' + questions + '</h2>');

    let j = 0;

    for (answer of multiAnswers) {
      $('#totalQ').append('<input type="radio" name="' + i + '" value="' + j + '">' + answer + '</input>');


      j++;

    }
    i++;



  }

  $('#totalQ').submit(function(event) {

    event.preventDefault();
    let userData = $(this).serializeArray();

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

  });


});
