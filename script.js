const quotes = [
    "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "It always seems impossible until it's done.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "You are never too old to set another goal or to dream a new dream.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Act as if what you do makes a difference. It does.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The best way to predict the future is to create it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "It always seems impossible until it's done.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "You are never too old to set another goal or to dream a new dream.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Act as if what you do makes a difference. It does.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "You miss 100% of the shots you don’t take.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you can dream it, you can do it.",
  "Don’t wait for opportunity. Create it.",
  "Everything you can imagine is real.",
  "Opportunities don't happen, you create them.",
  "The road to success is always under construction.",
  "The key to success is to start before you are ready.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
  ];

  const quoteElement = document.querySelector('.quote');
  const newQuoteButton = document.getElementById('newQuoteButton');

  newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });