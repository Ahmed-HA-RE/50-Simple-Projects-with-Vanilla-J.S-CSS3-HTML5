const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.querySelector('#quiz');
const quizTitleEl = document.querySelector('.quiz-title');
const answersEl = document.querySelectorAll('.answer');
const q_A = document.querySelector('.a_text');
const q_B = document.querySelector('.b_text');
const q_C = document.querySelector('.c_text');
const q_D = document.querySelector('.d_text');
const submitBtn = document.querySelector('#sumbit');
let score = 0;
let currentQuiz = 0;

function loadQuiz() {
  deselectAnswers();

  quizTitleEl.innerText = quizData[currentQuiz].question;
  q_A.innerText = quizData[currentQuiz].a;
  q_B.innerText = quizData[currentQuiz].b;
  q_C.innerText = quizData[currentQuiz].c;
  q_D.innerText = quizData[currentQuiz].d;
}

function deselectAnswers() {
  answersEl.forEach((answerEl) => (answerEl.checked = false));
}

function selectedAnswer() {
  let answer;
  answersEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    }

    if (currentQuiz === quizData.length) {
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button  
          `;
    }
  }
}

function init() {
  loadQuiz();
  submitBtn.addEventListener('click', selectedAnswer);
}

document.addEventListener('DOMContentLoaded', init);
