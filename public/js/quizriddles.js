(function() {
  const myQuestions = [
    {
      question: "I am tall when I am young yet short when I am old... What am I?",  //This declares the question
      answers: { //This inputs how many answers the user can select from
        a: "A Lighthouse",
        b: "A Tree",
        c: "A Candle"
      },
      correctAnswer: "c" //Declares which of the answers is correct
    },
    {
      question: "What has an eye but cannot see?",  //This declares the question
      answers: { //This inputs how many answers the user can select from
        a: "A Needle",
        b: "A Storm",
        c: "Sauron But He Is Blind"
      },
      correctAnswer: "a" //Declares which of the answers is correct
    },
    {
      question: "What sort of room has no doors or windows?",  //This declares the question
      answers: { //This inputs how many answers the user can select from
        a: "A Prison Cell",
        b: "A Mushroom",
        c: "A Chat Room",
        d: "Breathing Room"
      },
      correctAnswer: "b" //Declares which of the answers is correct
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");

  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", ()=>{
    showResults()
    revealSocialMediaBtn()
  });
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

function revealSocialMediaBtn(){
  const socialMediaButton = document.querySelector('#socialmedia')
 socialMediaButton.classList.toggle('hide');
}
