// Mobile Navbar Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// ---- QUIZ MATCHING LOGIC ----

// Fetch quiz answers
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || [];

// Career database with match keywords
const careerMatches = {
    "Web Developer": ["Solving problems", "Analytical thinking"],
    "Data Scientist": ["Analytical thinking", "Research lab"],
    "AI Engineer": ["Solving problems", "Research lab"],
    "Cyber Security Analyst": ["Solving problems", "Office work"],
    "Software Engineer": ["Solving problems", "Remote work", "Analytical thinking"],
    "Cloud Engineer": ["Office work", "Managing events"]
};

// Filter careers
const cards = document.querySelectorAll(".career-card");

cards.forEach(card => {
    const title = card.querySelector("h3").innerText;
    const keywords = careerMatches[title];

    if (!keywords) return;

    const isMatch = answers.some(ans => keywords.includes(ans));

    card.style.display = isMatch ? "block" : "none";
});

// Search Function
function searchCareer() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".career-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
