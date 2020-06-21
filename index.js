'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

const quotes = [
  "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
  "I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality...I believe that unarmed truth and unconditional love will have the final word.",
  "Life's most persistent and urgent question is, 'What are you doing for others?'",
  "In the End, we will remember not the words of our enemies, but the silence of our friends.",
  "I have decided to stick with love. Hate is too great a burden to bear.",
  "We must accept finite disappointment, but never lose infinite hope.",
  "I look to a day when people will not be judged by the color of their skin, but by the content of their character.",
  "History will have to record that the greatest tragedy of this period of social transition was not the strident clamor of the bad people, but the appalling silence of the good people.",
  "Change does not roll in on the wheels of inevitability, but comes through continuous struggle. And so we must straighten our backs and work for our freedom. A man can't ride you unless your back is bent.",
  "Whatever your life's work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better.",
  "If a man has not discovered something that he will die for, he isn't fit to live.",
  "Nonviolence is a powerful and just weapon, which cuts without wounding and ennobles the man who wields it. It is a sword that heals."
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// App
const app = express();
app.get('/', (req, res) => {
  res.send(quotes[getRandomInt(12)] + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
