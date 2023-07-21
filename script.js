// Skincare quiz questions
const questions = [
    {
        question: "Which of the following is a popular facial cleanser?",
        options: ["Aloe Vera Gel", "Micellar Water", "Body Lotion"],
        answer: "Micellar Water"
    },
    // Add more questions here
    {
        question: "How often should you exfoliate your skin?",
        options: ["Every day", "Once a week", "Never"],
        answer: "Once a week"
    }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Function to load question and options
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    questionText.textContent = questions[currentQuestion].question;

    // Shuffle the options array to randomize the order
    const shuffledOptions = shuffleArray(questions[currentQuestion].options);

    optionsContainer.innerHTML = "";
    shuffledOptions.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        optionsContainer.appendChild(button);
    });
}

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check answer and update score
function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show result
function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "none";

    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";

    const scoreResult = document.getElementById("score-result");
    scoreResult.textContent = score + " out of " + questions.length;

    let expertise = "";
    let expertiseDescription = "";
    if (score === questions.length) {
        expertise = "Skincare Expert!";
        expertiseDescription = "Congratulations! You have a deep understanding of skincare and know how to take care of your skin properly. Keep up the great work!";
    } else if (score >= (questions.length / 2)) {
        expertise = "Skincare Enthusiast";
        expertiseDescription = "Great job! You have a good knowledge of skincare and are on the right track to achieve a healthy complexion. Keep learning and exploring!";
    } else {
        expertise = "Skincare Learner";
        expertiseDescription = "Don't worry! Skincare is a journey, and you're just getting started. Keep learning and trying out different products to find what works best for you!";
    }

    const skincareExpertise = document.getElementById("expertise");
    skincareExpertise.textContent = expertise;

    const skincareExpertiseDescription = document.getElementById("expertise-description");
    skincareExpertiseDescription.textContent = expertiseDescription;
}

// Load the first question
loadQuestion();
