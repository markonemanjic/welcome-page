//Random quotes 
const randomText = [
  "You're my commander!",
  "Hello there, beautiful!",
  "Do anything you like!",
  "I'm yours, type whatever you want!",
  "You're great!",
  "Anything you wish, will happen!",
  "What's up?",
  "Today is a good day!",
  "Chrome is yours!",
  "Why not.",
  "Just zdrenjA!",
  "I'm a rich guy, why not!"
]
const wishText = randomText[getRandom(12)];

//Get random number
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Get element by ID
const getEl = (element) => {
  return document.getElementById(element);
}

//Get elements
const time = getEl('time'),
  welcome = getEl('welcome'),
  wish = getEl('wish'),
  body = getEl('body');

//Add zeros, when its under 10 hours/minutes/seconds
function getTimeRight(time) {
  if(time < 10) {
    return time = '0' + time;
  }
  else return time;
}

//Getting the right words and background acording to time
function sayRightThing(hour) {
  if(hour >= 5 && hour < 12) {
    //Good morning
    welcome.innerHTML = "Good Morning, Nemanja";
    body.style.backgroundImage = "url('./images/good-morning.jpg')";
    body.style.color = 'black';
    wish.innerHTML = wishText;
  } 
  else 
    if(hour >= 12 && hour < 19) {
      //Good day
      welcome.innerHTML = "Good Day, Nemanja";
      body.style.backgroundImage = "url('./images/good-day.jpg')";
      body.style.color = 'black';
      wish.innerHTML = wishText;
    }
  else 
    if(hour >= 19 && hour < 23) {
      //Good evening
      welcome.innerHTML = "Good Evening, Nemanja";
      body.style.backgroundImage = "url('./images/good-evening.jpg')";
      body.style.color = "black";
      wish.style.color = "white";
      wish.innerHTML = wishText;
    } 
  else {
    //Good night
    welcome.innerHTML = "Good Night, Nemanja";
    body.style.backgroundImage = "url('./images/good-night.jpg')";
    body.style.color = 'white';
    wish.innerHTML = wishText;
  }
}

//Get everything together
function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  time.innerHTML = `${getTimeRight(hour)}:${getTimeRight(min)}:${getTimeRight(sec)}`;
  sayRightThing(hour);
  setTimeout(showTime, 1000);
}

//Runtime
showTime();