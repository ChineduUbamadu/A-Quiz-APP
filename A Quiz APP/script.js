const questions = [
    {
        question: "Which sector does Access Bank Plc Nigeria operate in?",
        answers: [
            { text: "Banking and Financial Services", correct: true },
            { text: "Oil and Gas", correct: false },
            { text: "Telecommunications", correct: false },
            { text: "Agriculture", correct: false }
        ]
    },
    {
        question: "In which year was Access Bank Plc founded?",
        answers: [
            { text: "1989", correct: true },
            { text: "1995", correct: false },
            { text: "2002", correct: false },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the YouThrive Program by Access Bank?",
        answers: [
            { text: "Empowering youths with financial literacy and career development skills", correct: true },
            { text: "Building new bank branches", correct: false },
            { text: "Providing housing loans", correct: false },
            { text: "Selling insurance policies", correct: false }
        ]
    },
    {
        question: "The YouThrive Program mainly targets which group?",
        answers: [
            { text: "Retirees", correct: false },
            { text: "Working-class adults", correct: false },
            { text: "Young graduates and undergraduates", correct: true },
            { text: "Senior citizens", correct: false }
        ]
    },
    {
        question: "What skill development platform partners with Access Bank for YouThrive and career growth?",
        answers: [
            { text: "CarrerEx", correct: true },
            { text: "LinkedIn Learning", correct: false },
            { text: "Coursera", correct: false },
            { text: "Udemy", correct: false }
        ]
    },
    {
        question: "Which of these is NOT a major area of training provided by CarrerEx?",
        answers: [
            { text: "Digital Skills", correct: false },
            { text: "Personal Branding", correct: false },
            { text: "Space Exploration", correct: true },
            { text: "Career Management", correct: false }
        ]
    },
    {
        question: "Through YouThrive, Access Bank aims to help youths in what way?",
        answers: [
            { text: "Access to business grants and job placements", correct: true },
            { text: "Free international vacations", correct: false },
            { text: "Vehicle loans", correct: false },
            { text: "Free smartphones", correct: false }
        ]
    },
    {
        question: "Which of the following best describes CarrerEx?",
        answers: [
            { text: "A career development and learning platform", correct: true },
            { text: "A health insurance company", correct: false },
            { text: "A political movement", correct: false },
            { text: "A logistics company", correct: false }
        ]
    },
    {
        question: "Access Bank's YouThrive Program helps participants build what kind of network?",
        answers: [
            { text: "Real Estate network", correct: false },
            { text: "Professional and Career Network", correct: true },
            { text: "Agricultural Cooperative", correct: false },
            { text: "Cryptocurrency Market", correct: false }
        ]
    },
    {
        question: "Which of these best describes the mission of YouThrive and CarrerEx collaboration?",
        answers: [
            { text: "To enable youths to be self-reliant and career-ready", correct: true },
            { text: "To sell banking products", correct: false },
            { text: "To organize sports events", correct: false },
            { text: "To reduce taxes for youths", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, isCorrect) {
    const buttons = answerButtons.children;
    Array.from(buttons).forEach(btn => {
        btn.disabled = true;
        if (btn.innerHTML === button.innerHTML && isCorrect) {
            btn.classList.add("correct");
        } else if (btn.innerHTML === button.innerHTML && !isCorrect) {
            btn.classList.add("wrong");
        }
    });

    if (isCorrect) {
        score++;
    }
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
