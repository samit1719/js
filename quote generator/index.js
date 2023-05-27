let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `Mother Teresa`,
  },
  {
    quote: `"When you reach the end of your rope, tie a knot in it and hang on. "`,
    person: `Franklin D. Roosevelt`,
  },
  {
    quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
    person: `Margaret Mead`,
  },
  {
    quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
    person: `Robert Louis Stevenson`,
  },
  {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`,
  },
  {
    quote: `"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart. "`,
    person: `Helen Keller`,
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`,
  },
  {
    quote: `"Whoever is happy will make others happy too."`,
    person: `Anne Frank`,
  },
  {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: `Ralph Waldo Emerson`,
  },
  {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    person: `Maya Angelou`,
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `Nelson Mandela`,
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person: `Abraham Lincoln`,
  },
  {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: `Babe Ruth`,
  },
  {
    quote: `"Life is either a daring adventure or nothing at all. "`,
    person: `Helen Keller`,
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas A. Edison`,
  },
  {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    person: `Dr. Seuss`,
  },
  {
    quote: `"If life were predictable it would cease to be life and be without flavor."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Life is really simple, but we insist on making it complicated."`,
    person: `Confucius`,
  },
  {
    quote: `"May you live all the days of your life."`,
    person: `Jonathan Swift`,
  },
  {
    quote: `"Life itself is the most wonderful fairy tale."`,
    person: `Hans Christian Andersen`,
  },
  {
    quote: `"Do not let making a living prevent you from making a life."`,
    person: `John Wooden`,
  },
  {
    quote: `"Life is trying things to see if they work."`,
    person: `Ray Bradbury`,
  },
  {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas A. Edison`,
  },
  {
    quote: `"I find that the harder I work, the more luck I seem to have."`,
    person: `Thomas Jefferson`,
  },
  {
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston S. Churchill`,
  },
  {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`,
  },
  {
    quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
    person: `Colin Powell`,
  },
  {
    quote: `"It is better to fail in originality than to succeed in imitation."`,
    person: `Herman Melville`,
  },
  {
    quote: `"Try not to become a man of success. Rather become a man of value."`,
    person: `Albert Einstein`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

  console.log(random);
});
