$(document).ready(function() {

  let quiz = [{
      question: "1.  Into which sea does the Nile flow?",
      answers: ["Indian Ocean", "Caribbean Sea", "Arctic Ocean", "Mediterranean Sea"],
      correctAnswer: 3

    },
    {
      question: "2.  Three continents lie on the Tropic of Capricorn, South America and Africa name another one?",
      answers: ["Australia", "Antarctica", "Europe", "North America"],
      correctAnswer: 0

    },
    {
      question: "3.  In American currency 10 cents make a what?",
      answers: ["Dime", "Penny", "Pound", "Euro"],
      correctAnswer: 0
    },
    {
      question: "4.  Afrikaans was developed from which European language?",
      answers: ["French", "Dutch", "Flemish", "German"],
      correctAnswer: 1
    },
    {
      question: "5.  An Ortanique is a cross between a tangerine and what other fruit?",
      answers: ["Apple", "Pineapple", "Mango", "Orange"],
      correctAnswer: 3
    },
    {
      question: "6.  What Italian word for 'Scratched Drawing' can be found on walls all over the world?",
      answers: ["Vandilissimo", "Painting", "Graffitti", "Art"],
      correctAnswer: 2
    },
    {
      question: "7.  What musical features 'Some Enchanted Evening' and 'There Is Nothing Like A Dame'?",
      answers: ["South Pacific", "Mary Poppins", "Sound of Music", "Cats"],
      correctAnswer: 0
    },
    {
      question: "8.  What was the name of the first manned lunar landing mission in 1969?",
      answers: ["Spaceship 4", "Apollo XI", "Newton 11", "Moon XI"],
      correctAnswer: 1
    },
    {
      question: "9.  Which boxer was nicknamed 'The Dark Destroyer'?",
      answers: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Nigel Benn"],
      correctAnswer: 3
    },
    {
      question: "10. What was the name of Ritchie Valens' girlfriend?",
      answers: ["Donna", "Denice", "Dian", "Debra"],
      correctAnswer: 0
    },
    {
      question: "11. What is the procedure called where an anaesthetic is injected close to the spinal cord?",
      answers: ["Choke", "Flambe", "Epidural", "Seizure"],
      correctAnswer: 2
    },
    {
      question: "12. What poisonous oily liquid occurs naturally in tobacco leaves?",
      answers: ["Syrup", "Vinegar", "Nicotine", "Tarmac"],
      correctAnswer: 2
    },
    {
      question: "13. Who had his first UK top 10 hit with 'Wichita Lineman'?",
      answers: ["Elvis Presley", "John Lennon", "Glen Cambell", "Charlie West"],
      correctAnswer:2
    },
    {
      question: "14. Which sign of the Zodiac is represented by the Scales?",
      answers: ["Libra", "Cancer", "Virgo", "Pisces"],
      correctAnswer: 0
    },
    {
      question: "15. In which country was Nelson Mandela born?",
      answers: ["Australia", "South Africa", "Zimbabwe", "Germany"],
      correctAnswer: 1
    },
    {
      question: "16. What is the gemstone for September?",
      answers: ["Ruby", "Diamond", "Sapphire", "Crystal"],
      correctAnswer: 0
    },
    {
      question: "17. What instrument has been nicknamed the 'Mississippi Saxaphone'?",
      answers: ["Guitar", "Harmonica", "Trumpet", "Violin"],
      correctAnswer: 1
    },
    {
      question: "18. One and a half litres of champagne is known as a what?",
      answers: ["Gallon", "Elder", "Magnum", "Barrel"],
      correctAnswer: 2
    },
    {
      question: "19 .What is Cape Town most famous for?",
      answers: ["Apples", "Table Mountain", "Wine", "Red Meat"],
      correctAnswer: 1
    },
    {
      question: "20. What is the common name of the' Auora Borealis'?",
      answers: ["Northern Lights", "Lights the Night", "Green Clouds", "Sky Nights"],
      correctAnswer: 0
    },
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
