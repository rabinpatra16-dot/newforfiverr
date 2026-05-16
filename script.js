const text = "Web Developer & Freelancer 🚀";
const speed = 100;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  document.querySelector(".hero p").innerHTML = "";
  typeWriter();
};
