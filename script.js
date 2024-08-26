const questions = [
    {
        question: "Qual é o principal cultivo agrícola do Brasil?",
        answers: [
            { text: "Soja", correct: true },
            { text: "Milho", correct: false },
            { text: "Café", correct: false },
            { text: "Cana-de-açúcar", correct: false }
        ]
    },
    {
        question: "Qual destes métodos é mais sustentável para o solo?",
        answers: [
            { text: "Monocultura", correct: false },
            { text: "Rotação de culturas", correct: true },
            { text: "Uso intensivo de fertilizantes", correct: false },
            { text: "Queimada", correct: false }
        ]
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = answerButtonsElement.querySelector('.btn');
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
    });
}

function resetState() {
    document.getElementById('next-btn').style.display = 'none';
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#4caf50';
        button.disabled = false;
    });
}

function selectAnswer(button) {
    const correct = button.dataset.correct === 'true';
    button.style.backgroundColor = correct ? '#66bb6a' : '#ef5350';

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        alert('Você completou o quiz!');
        startGame();
    }
}

startGame();