document.addEventListener("DOMContentLoaded", () => {
    
    const heroTitle = document.querySelector("#hero-title");
    const allCards = document.querySelectorAll(".card");
    const firstCard = document.querySelector(".card");

    if (firstCard) {
        firstCard.classList.add("highlighted");
    }

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabPanels.forEach((panel) => panel.classList.remove("active"));

            button.classList.add("active");

            const targetTabId = button.getAttribute("data-tab");
            const targetPanel = document.getElementById(targetTabId);

            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });

    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote");

    function getQuote() {
        if (!quoteText || !quoteAuthor) return;

        quoteText.textContent = "Loading quote...";
        quoteAuthor.textContent = "";

        fetch("https://dummyjson.com/quotes/random")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response failed");
                }
                return response.json();
            })
            .then((data) => {
                quoteText.textContent = `"${data.quote}"`;
                quoteAuthor.textContent = `- ${data.author}`;
            })
            .catch((error) => {
                fetch("https://api.quotable.io/random")
                    .then((res) => res.json())
                    .then((fallbackData) => {
                        quoteText.textContent = `"${fallbackData.content}"`;
                        quoteAuthor.textContent = `- ${fallbackData.author}`;
                    })
                    .catch(() => {
                        quoteText.textContent = "\"Continuous learning is the key to unlocking potential.\"";
                        quoteAuthor.textContent = "- GrowthLift Mentor";
                    });
            });
    }

    getQuote();

    if (newQuoteBtn) {
        newQuoteBtn.addEventListener("click", getQuote);
    }
});


// Practice Code for JS Fundamentals



// const internName = "Mehmood Hassan";
// const company = "GrowthLift Digital";
// const currentWeek = 2;

// let isOnline = true;
// let totalProjectsCompleted = 3;

// let greeting = "Hello, Welcome to JS Fundamentals!";
// let stipendAmount = 15000;
// let skills = ["HTML5", "CSS3", "JavaScript", "React.js"];
// let intern = {
//   name: internName,
//   week: currentWeek,
//   city: "Lahore",
//   track: "Computer Science",
// };

// console.log("=== VARIABLES & DATA TYPES ===");
// console.log("Greeting:", greeting);
// console.log("Stipend Amount:", stipendAmount);
// console.log("Is Online Status:", isOnline);
// console.log("Skills Array:", skills);
// console.log("Intern Object:", intern);

// function greetUserRegular(user) {
//   return "Hello " + user + " from Regular Function!";
// }

// const greetUserArrow = (user) => `Hello ${user} from Arrow Function!`;

// console.log("\n=== FUNCTIONS ===");
// console.log(greetUserRegular(internName));
// console.log(greetUserArrow(internName));

// console.log("\n=== LOOPS & ARRAYS ===");
// console.log("Standard For Loop (0 to 4):");
// for (let i = 0; i < 5; i++) {
//   console.log(`Index count: ${i}`);
// }

// console.log("Array forEach Loop:");
// skills.forEach((skill, index) => {
//   console.log(`Skill #${index + 1}: ${skill}`);
// });

// console.log("\n=== CONDITIONALS & TEMPLATE LITERALS ===");
// if (isOnline) {
//   console.log(
//     `User ${internName} is currently online working on ${company} Week ${currentWeek}.`,
//   );
// } else {
//   console.log(`User ${internName} is currently offline.`);
// }

// console.log(
//   `Welcome to ${company}, ${internName}! Completed ${totalProjectsCompleted} tasks so far.`,
// );
