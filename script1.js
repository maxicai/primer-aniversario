// Lista de mensajes románticos que aparecerán en burbujas
const messages = [
  "Te amo muchito",
  "Sos lo mejor que me paso",
  "Un añito",
  "El primero de muchos",
  "Siempre juntitos",
  "Para siempre",
  "El amor de mi vida",
  "Sos unica",
  "La mas hermosa",
  "La mejor novia del mundo",
];

// Función que crea una burbuja de texto con un mensaje aleatorio
function createTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

  const left = Math.random() * 85 + 5;
  const top = Math.random() * 80 + 10;

  bubble.style.position = "absolute";
  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";
  document.getElementById("bubbles-text").appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(createTextBubble, 500);

for (let i = 0; i < 35; i++) {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.innerText = "🤎";

  const leftPos = Math.random() * 100;
  const topPos = Math.random() * -20 - 10; // Ahora desde -10vh a -30vh

  heart.style.left = leftPos + "vw";
  heart.style.top = topPos + "vh";
  heart.style.animationDelay = (Math.random() * 6) + "s";

  document.body.appendChild(heart);
}