// Mobile Navbar Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// ROADMAP DATA
const roadmaps = {
    webdev: [
        { title: "Step 1: Learn HTML & CSS", desc: "Start with website structure and styling basics." },
        { title: "Step 2: Learn JavaScript", desc: "Build dynamic and interactive web pages." },
        { title: "Step 3: Frontend Framework", desc: "Master React, Angular, or Vue." },
        { title: "Step 4: Backend Basics", desc: "Learn Node.js, Express, and APIs." },
        { title: "Step 5: Databases", desc: "Learn MongoDB, MySQL, or PostgreSQL." }
    ],

    datascience: [
        { title: "Step 1: Learn Python", desc: "Core programming required for data processing." },
        { title: "Step 2: Statistics & Math", desc: "Foundation for model building & algorithms." },
        { title: "Step 3: Data Analysis", desc: "Use pandas, NumPy, matplotlib & data cleaning." },
        { title: "Step 4: Machine Learning", desc: "Learn ML algorithms & model building." },
        { title: "Step 5: Deep Learning", desc: "Explore neural networks, TensorFlow, PyTorch." }
    ],

    ai: [
        { title: "Step 1: Python + Math", desc: "Strong basics in programming & mathematics." },
        { title: "Step 2: Machine Learning", desc: "Build classical ML models." },
        { title: "Step 3: Deep Learning", desc: "Neural networks, CNN, RNN, Transformers." },
        { title: "Step 4: NLP", desc: "Text processing, LLMs, chatbots & embeddings." },
        { title: "Step 5: AI Deployment", desc: "Use APIs, cloud, and optimization techniques." }
    ],

    cyber: [
        { title: "Step 1: Networking Basics", desc: "Learn TCP/IP, routing, firewalls & protocols." },
        { title: "Step 2: Linux & Scripting", desc: "Master Linux and automate tasks." },
        { title: "Step 3: Ethical Hacking Tools", desc: "Work with Nmap, BurpSuite, Metasploit." },
        { title: "Step 4: Security Concepts", desc: "Threat modeling, cryptography, OWASP." },
        { title: "Step 5: Certifications", desc: "CEH, OSCP, CompTIA Security+ recommended." }
    ]
};

// FUNCTION TO DISPLAY ROADMAP
function showRoadmap(type) {
    const container = document.getElementById("roadmapContainer");
    container.innerHTML = ""; // Clear previous roadmap

    roadmaps[type].forEach(step => {
        const card = document.createElement("div");
        card.className = "step-card";

        card.innerHTML = `
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.desc}</div>
        `;

        container.appendChild(card);
    });
}
