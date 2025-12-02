let userSelections = [];
const questions = [
    {
        q: "What type of tasks do you enjoy the most?",
        options: ["Solving problems", "Creative designing", "Helping people", "Managing events"],
        correct: 0
    },
    {
        q: "Which environment suits you best?",
        options: ["Office work", "Field work", "Research lab", "Remote work"],
        correct: 3
    },
    {
        q: "What is your strongest skill?",
        options: ["Analytical thinking", "Artistic skills", "Communication", "Leadership"],
        correct: 0
    }
];

let index = 0;
let score = 0;
let timer = 30;
let timerInterval;

function loadQuestion() {
    document.getElementById("question").innerText = questions[index].q;
    
    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";

    questions[index].options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = opt;
        div.onclick = () => selectOption(i, div);
        optionsBox.appendChild(div);
    });

    updateProgress();
}

// Option Selection
function selectOption(i, element) {
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");

    userSelections[index] = questions[index].options[i];

if (i === questions[index].correct) score++;

}

// Progress Bar
function updateProgress() {
    let progress = ((index) / questions.length) * 100;
    document.querySelector("#progress").style.setProperty("--progress-width", progress + "%");
}

// Timer
function startTimer() {
    timerInterval = setInterval(() => {
         document.getElementById("timer").innerText = `Time Left: ${timer}s`;

        if (timer <= 0) {
            nextQuestion();
            timer = 30; // 
        }
        timer--;
    }, 1000);
}

function nextQuestion() {
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
   clearInterval(timerInterval);
    
    // Save answers to careers page
    localStorage.setItem("quizAnswers", JSON.stringify(userSelections));
    
    window.location.href = "careers.html";
}

document.getElementById("next-btn").onclick = nextQuestion;

// Start quiz
loadQuestion();
startTimer();
