const no = document.getElementById("no");
const yes = document.getElementById("yes");
const gif = document.getElementById("gif");
const text = document.getElementById("text");

no.addEventListener("mouseover", () => {
const x = Math.random()*200 -100;
const y = Math.random()*100 -50;
no.style.transform = `translate(${x}px,${y}px)`;
});

yes.addEventListener("click", () => {
gif.src = "assets/cat2.png";
text.innerHTML = "Yay! I knew you'd say YES ❤️";

no.style.display="none";
yes.style.display="none";

document.querySelector(".card").style.animation="pop 0.6s ease";
});
