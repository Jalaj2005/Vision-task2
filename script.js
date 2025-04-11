const Quotes = ["The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "In the middle of every difficulty lies opportunity.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Happiness depends upon ourselves.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "The best way to predict the future is to create it.",
    "It is not length of life, but depth of life.",
    "Be the change that you wish to see in the world."
];

const author = ["Franklin D. Roosevelt",
    "Winston Churchill",
    "Buddha",
    "Albert Einstein",
    "Steve Jobs",
    "Aristotle",
    "Thomas Edison",
    "Peter Drucker",
    "Ralph Waldo Emerson",
    "Mahatma Gandhi"
];



function displayRandom() {


    const randomIndex = Math.floor(Math.random() * Quotes.length); // Get random index

    const randomQuote = Quotes[randomIndex]; // Pick a fruit
    document.getElementById("quote").textContent = randomQuote; // Display in div

    const randomauthor = author[randomIndex];
    document.getElementById("author").textContent = randomauthor; // Display in div


}



window.onload = function () {
   
    function copyQuote() {
        const quoteText = document.getElementById("quote").textContent; 

        navigator.clipboard.writeText(quoteText)
            .then(() => {
                alert("Quote copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }

    document.querySelector(".copy").addEventListener("click", copyQuote);
    
    window.displayRandom = displayRandom;
};
