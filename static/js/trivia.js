fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean").then(response => response.json()).then(questions => {

  
  var i = 0;


  
  var end_of_test = "End of Quiz. You scored "

  var result = questions.results
  
  var item = 0
  var questionNumber = 1

  $(".questionBox h3").text(result[item].question);

  while (i < document.querySelectorAll(".button").length) {
    document.querySelectorAll(".button")[i].addEventListener("click", handleClick);
    i++;

  }

  // $(document).on("click", "button", handleClick);

  function handleClick() {
    var button = $(this).data("value");
    // console.log("you chose " + button)
    updateScreen(button)
  }

  var currentIndex = result.length
  var score = 0

  

  function updateScreen(key) {
  
    if (item <= result.length) {
      
      if (key === result[item].correct_answer) {
        score += 1
        $('.score p').text('Score: ' + (score));
        alert("Correct!")
      } else {
        alert("Wrong!")
      }

      questionNumber += 1
      item += 1

      if (item < result.length) { 
        $(".questionBox h3").text(decodeURIComponent(result[item].question));
      } else {
        $(".questionBox h3").text(end_of_test + score + " out of " + result.length);
        var button = document.querySelectorAll('.button');
        button.forEach(function(button) {
          button.disabled = true;
        });
      }

      
      
    } 
      
    }

  })

function reloadPage() {
  location.reload();
}