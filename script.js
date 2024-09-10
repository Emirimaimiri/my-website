const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Do not watch the clock. Do what it does. Keep going.",
  "The only way to do great work is to love what you do."
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("randomQuote").textContent = quotes[randomIndex];
}
