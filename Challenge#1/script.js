/** @format */
async function respond() {
  console.log("Script.js conencted");
  console.log("Working.");
  var x = "Is the browser online? " + navigator.onLine;
  console.log(x);
}
respond();

var audio = document.getElementById("sound").play();
console.log("Bonjour! [Visit The Website For the First Time]");

window.onload = () => {
  scrollTop.style.visibility = "hidden";
  scrollTop.style.opacity = 0;
  // alert(
  //   "This is a Front End Dev Challenge that I attempted, This is just for fun. Challenge from here: "
  // );
};

// for (i = 0; i < 50; i++) {
//   console.log("Never Gonna Give you Up");
//   console.log("Never Gonna let you Down");
//   console.log("*RICKROLLING INTENSIFIES");
// }
var scrollTop = document.getElementById("scrolltop");

var progressbar = document.getElementById("progressbar");
var percent = document.getElementById("percent");

var totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  totalHeight = document.body.scrollHeight - window.innerHeight;
  var progress = (window.pageYOffset / totalHeight) * 100;
  progressbar.style.height = progress + "%";
  percent.innerHTML = Math.round(progress) + " %";
  if (window.scrollY > 100) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};

var count = 0;
var preloader = document.getElementById("loading");

function loaded() {
  if (count == 0) {
    setInterval(counterHead, 3000);
  }
  function counterHead() {
    preloader.style.display = "none";
  }
}

// function toggletheme() {
//   var element = document.getElementById("content");
//   element.classList.toggle("dark-mode");
//   console.log("toogle pressed");
// }
