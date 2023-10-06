const questions = [
	{
		question: "Which animal is the largest animal in the world?",
		answers: [
			{ text: "shark", correct: false },
			{ text: "dog", correct: false },
			{ text: "wale", correct: true },
			{ text: "elephant", correct: false },
		],
	},
	{
		question: "Which country is the largest country in the world?",
		answers: [
			{ text: "Russia", correct: true },
			{ text: "Peru", correct: false },
			{ text: "wales", correct: false },
			{ text: "Cameroon", correct: false },
		],
	},
	{
		question: "Which country is the most populated in the  world?",
		answers: [
			{ text: "Shri Lanka", correct: false },
			{ text: "Japan", correct: false },
			{ text: "China", correct: true },
			{ text: "Nigeria", correct: false },
		],
	},
	{
		question: "Which animal is the Fastext animal in the world?",
		answers: [
			{ text: "shark", correct: false },
			{ text: "Tiger", correct: false },
			{ text: "Deer", correct: false },
			{ text: "Cheeter", correct: true },
		],
	},
	{
		question: "The longest river  in the world?",
		answers: [
			{ text: "Sanaga", correct: false },
			{ text: "Missisipi", correct: false },
			{ text: "Nile", correct: true },
			{ text: "Wouri", correct: false },
		],
	},
	{
		question: "The largest river basin in the world?",
		answers: [
			{ text: "Amazon", correct: true },
			{ text: "Congo", correct: false },
			{ text: "Victoria", correct: false },
			{ text: "Benin", correct: false },
		],
	},
	{
		question: "The deepestocean in the world?",
		answers: [
			{ text: "Indian", correct: false },
			{ text: "Atlantic", correct: false },
			{ text: "Pacific", correct: true },
			{ text: "Antactic", correct: false },
		],
	},
	{
		question: "The Largest continent in the world?",
		answers: [
			{ text: "Afica", correct: false },
			{ text: "Europe", correct: false },
			{ text: "Australia", correct: false },
			{ text: "Asia", correct: true },
		],
	},
	{
		question: "The  greatest footballer of all time?",
		answers: [
			{ text: "Pedri", correct: false },
			{ text: "Mbappe", correct: false },
			{ text: "L.Messi", correct: true },
			{ text: "Jude. B", correct: false },
		],
	},
	{
		question: "The country with the cutest men in the world?",
		answers: [
			{ text: "Nigeria", correct: false },
			{ text: "Algeria", correct: false },
			{ text: "Cameroon", correct: true },
			{ text: "Japan", correct: false },
		],
	},
	{
		question: "The greatest footballer  of all time in Africa?",
		answers: [
			{ text: "Pedri", correct: false },
			{ text: "Mbappe", correct: false },
			{ text: "S.Eto'o ", correct: true },
			{ text: "Jude. B", correct: false },
		],
	},
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
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML =
		questionNo + ". " + currentQuestion.question;
	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}
// this line of code will help remove the previous answers and display the
// the current answers
function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}
function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect) {
		selectedBtn.classList.add("correct");
		score++;
	} else {
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}
function showScore() {
	resetState();
	questionElement.innerHTML = `you have ${score} out of ${questions.length}!  `;
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
