function sayNo() {
  document.getElementById("lottieBox").innerHTML = `
    <lottie-player 
      src="https://assets7.lottiefiles.com/packages/lf20_x62chJ.json"
      background="transparent"
      speed="1"
      loop
      autoplay>
    </lottie-player>
  `;
}

function sayYes() {
  document.getElementById("lottieBox").innerHTML = `
    <lottie-player 
      src="https://assets2.lottiefiles.com/packages/lf20_8xoiwjfk.json"
      background="transparent"
      speed="1"
      loop
      autoplay>
    </lottie-player>
  `;

  setTimeout(() => {
    showScreen(2);
  }, 2500);
}

function selectTeddy(name) {
  showScreen(3);
  document.getElementById("finalText").innerText =
    `You chose ${name} 🧸❤️`;
}

function showScreen(num) {
  document.querySelectorAll(".screen")
    .forEach(screen => screen.classList.remove("active"));

  document.getElementById(`screen${num}`)
    .classList.add("active");
}
