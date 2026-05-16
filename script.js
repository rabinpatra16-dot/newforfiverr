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
}
function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("সব field পূরণ করো! 😅");
  } else {
    document.getElementById("successMsg").innerHTML = 
      "✅ ধন্যবাদ " + name + "! আমি শীঘ্রই তোমার সাথে যোগাযোগ করব!";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
