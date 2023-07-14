
var quotes = [];

// Load quotes from local storage if available
if (localStorage.getItem("quotes")) {
  quotes = JSON.parse(localStorage.getItem("quotes"));
}

function addUserQuote() {
  var userQuote = document.getElementById("userQuote").value;
  if (userQuote.trim() !== "") {
    quotes.push(userQuote);
    document.getElementById("userQuote").value = "";
    saveQuotesToLocalStorage();
  }
}

function generateRandomQuote() {
    if (quotes.length > 0) {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteDisplay").textContent = quotes[randomNumber];
    } else {
      document.getElementById("quoteDisplay").textContent = "No quotes available.";
    }
  }

  // Initial quote generation
  generateRandomQuote();

  // Generate a new quote every 5 seconds
  setInterval(generateRandomQuote, 5000);

function saveQuotesToLocalStorage() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

