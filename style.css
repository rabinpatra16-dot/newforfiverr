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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".card, .contact").forEach(el => {
    observer.observe(el);
  });
};

function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("সব field পূরণ করো! 😅");
  } else {
    document.getElementById("successMsg").innerHTML =
      "✅ ধন্যবাদ " + name + "! আমি শীঘ্রই যোগাযোগ করব!";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
function openImg(el) {
  const img = el.querySelector("img").src;
  document.getElementById("lightbox-img").src = img;
  document.getElementById("lightbox").style.display = "flex";
}

function closeImg() {
  document.getElementById("lightbox").style.display = "none";
}
