const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const card = document.getElementById("card");

// Your GIF links
const FIRST_GIF =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXI5OW5pbGEyZGVkenJxZzkxM3Bua2c0M2lnMTNzd21hNnZ2NnF3ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/giphy.gif";

const YES_GIF =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdvYmJtMGp2a3d2YmNvcjQ1anR0ZWlsYnJrNWd0bWt2NWNqaXBjYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sddFzkjvIGVUws1xCS/giphy.gif";

// Make NO run away (works on hover + touch)
function moveNoButton() {
  // Move within a safe area around the card
  const x = Math.random() * 260 - 130; // -130..+130
  const y = Math.random() * 120 - 60;  // -60..+60
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES clicked: show second GIF + new text + hide buttons
yesBtn.addEventListener("click", () => {
  gif.src = YES_GIF;
  text.textContent = "Yay! I knew you'd say YES! ❤️";

  buttons.style.display = "none";

  // replay pop animation
  card.style.animation = "none";
  // force reflow so animation restarts
  void card.offsetWidth;
  card.style.animation = "pop 0.55s ease";
});

// (Optional) ensure the first gif is set
gif.src = FIRST_GIF;
