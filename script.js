const emojis =["❤️","✨","☀️","👑"];

for (let i = 0; i <25; i++){
    const e = document.createElement("span");
    e.className = "emoji";
    e.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = 6 + Math.random() * 6 + "s";
    document.body.appendChild(e);
}

const photos = ["pictures/photo1.jpg","pictures/photo2.jpg","pictures/photo3.jpg","pictures/photo4.jpg","pictures/photo5.jpg","pictures/photo6.jpg","pictures/photo7.jpg","pictures/photo8.jpg","pictures/photo9.jpg","pictures/photo10.jpg","pictures/photo11.jpg","pictures/photo12.jpg","pictures/photo13.jpg","pictures/photo14.jpg","pictures/photo15.jpg","pictures/photo16.jpg","pictures/photo17.jpg","pictures/photo18.jpg"];

photos.forEach((src, index) => {
  const p = document.createElement("div");
  p.className = "polaroid";

  // Even horizontal spacing
  const spacing = 100 / photos.length;
  p.style.left = (index * spacing) + "vw";

  // Random slight variation so it doesn't look robotic
  p.style.left = (index * spacing + Math.random() * 3) + "vw";

  // Random rotation
  p.style.setProperty("--rot", (Math.random()*20-10)+"deg");

  // Faster animation so they don’t stack
  p.style.animationDuration = 12 + Math.random()*6 + "s";

  // Start at different vertical offsets
  p.style.animationDelay = Math.random() * 10 + "s";

  const img = document.createElement("img");
  img.src = src;
  p.appendChild(img);

  document.body.appendChild(p);
});

const noTexts = [
  "ARE YOU SURE?🥺",
  "PLEASEEE😣",
  "TRUST ME😩",
  "YOU WON'T REGRET IT😓",
  "I BEG YOU😭"
];

let count = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
  count++;
  yesBtn.style.transform = `scale(${1 + count * 0.15})`;

  if (count < noTexts.length) {
    noBtn.innerText = noTexts[count + 0];
  } else {
    noBtn.classList.add("hidden");
  }
});

yesBtn.addEventListener("click", () => {
  document.getElementById("mainCard").classList.add("hidden");
  const reveal = document.getElementById("revealCard");
  reveal.classList.remove("hidden");
  reveal.classList.add("reveal");
});

