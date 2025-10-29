const questions = [
    {
        question: "How many players are there in a cricket team on the field at any one time?",
        options: ["10", "11", "12", "9"],
        correct: "11"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Sachin Tendulkar", "MS Dhoni", "Sourav Ganguly"],
        correct: "Sachin Tendulkar"
    },
    {
        question: "Who holds the record for the most runs in Test cricket?",
        options: ["Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar", "Steve Smith"],
        correct: "Sachin Tendulkar"
    },
    {
        question: "What is the maximum number of overs in a T20 cricket match?",
        options: ["20", "50", "40", "30"],
        correct: "20"
    },
    {
        question: "Who has won the most ICC Cricket World Cups as captain?",
        options: ["Ricky Ponting", "MS Dhoni", "Steve Waugh", "Sourav Ganguly"],
        correct: "MS Dhoni"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket (in terms of balls faced)?",
        options: ["AB de Villiers", "Chris Gayle", "Virat Kohli", "Shahid Afridi"],
        correct: "AB de Villiers"
    },
    {
        question: "What is a no-ball in cricket?",
        options: ["When the bowler bowls the ball before the batsman is ready", "When the bowler delivers the ball illegally (e.g., foot over the crease)", "When the batsman hits the ball twice", "When the wicket-keeper misses a catch"],
        correct: "When the bowler delivers the ball illegally (e.g., foot over the crease)"
    },
    {
        question: "Who is the all-time leading wicket-taker in Test cricket?",
        options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
        correct: "Muttiah Muralitharan"
    },
    {
        question: "What is the highest individual score in Test cricket?",
        options: ["375", "400", "364", "380"],
        correct: "400"
    },
    {
        question: "How many wickets are there in a standard cricket match?",
        options: ["10", "20", "15", "12"],
        correct: "20"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsEl.appendChild(button);
    });
    resultEl.textContent = '';
    nextBtn.style.display = 'none';
}

function selectOption(button, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.disabled = true);
    if (selectedOption === currentQuestion.correct) {
        button.classList.add('correct');
        resultEl.textContent = 'Correct!';
        score++;
    } else {
        button.classList.add('wrong');
        resultEl.textContent = `Wrong! Correct answer: ${currentQuestion.correct}`;
        options.forEach(opt => {
            if (opt.textContent === currentQuestion.correct) {
                opt.classList.add('correct');
            }
        });
    }
    scoreEl.textContent = `Score: ${score}/${questions.length}`;
    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = 'Quiz Complete!';
        optionsEl.innerHTML = '';
        resultEl.textContent = `Final Score: ${score}/${questions.length}`;
        nextBtn.style.display = 'none';
    }
});

loadQuestion();