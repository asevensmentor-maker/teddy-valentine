const teddy = document.getElementById("teddyAnimation");
const noBtn = document.getElementById("noBtn");

/* NO button runs away 😄 */
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* Teddy cry */
function sayNo() {
  teddy.load("https://assets7.lottiefiles.com/packages/lf20_x62chJ.json");
}

/* Teddy dance */
function sayYes() {
  teddy.load("https://assets2.lottiefiles.com/packages/lf20_8xoiwjfk.json");

  setTimeout(() => {
    showScreen(2);
  }, 3000);
}

/* Select teddy & background */
function selectTeddy(name) {
  const screen3 = document.getElementById("screen3");
  let img = "";

  if (name === "Teddy Bear") img = "./images/teddy.png";
  if (name === "Stitch") img = "./images/stitch.png";
  if (name === "Panda") img = "./images/panda.png";
  if (name === "Tech Teddy") img = "./images/tech.png";

  screen3.style.backgroundImage = `url(${img})`;
  document.getElementById("finalText").innerText = `You chose ${name} 🧸❤️`;

  showScreen(3);
}

/* Screen switch */
function showScreen(num) {
  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));

  document.getElementById(`screen${num}`)
    .classList.add("active");
}

/* Share button */
function shareLove() {
  const text = "Happy Teddy Day 🧸❤️ A special surprise for you 💖";
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({ title: "Teddy Day", text, url });
  } else {
    alert("Copy this link:\n" + url);
  }
}
