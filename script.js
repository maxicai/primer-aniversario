const tree = document.getElementById("tree");
const leaves = document.getElementById("leaves");
const leftText = document.getElementById("leftText");
const letterText = document.getElementById("letterText");
const counter = document.getElementById("counter");

function startAnimation() {
  tree.classList.remove("hidden");

  const colors = [
    "#ff8fa3", "#f9c0c0", "#ffc6c7", "#ffb3b3", "#fda4af",
    "#fab1a0", "#f9a8d4", "#ffe5ec", "#ec5e5e", "#f973a1",
    "#c1e1c1", "#d1c4e9", "#f8bbd0", "#ffe082", "#b2ebf2",
    "#c8e6c9", "#fff59d", "#ce93d8", "#ffab91", "#b3e5fc",
    "#e0f7fa", "#e6ee9c", "#ffd180", "#f48fb1", "#aed581"
  ];

  const totalHearts = 500;
  const animDuration = 0.5;

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.background = colors[Math.floor(Math.random() * colors.length)];
    heart.style.left = `${Math.random() * 380}px`;
    heart.style.top = `${Math.random() * 230}px`;
    heart.style.animationDelay = `${i * 0.007}s`;
    leaves.appendChild(heart);
  }

  const totalAnimationTime = (totalHearts * 0.007) + animDuration;

  setTimeout(() => {
    startTextAnimation();
  }, totalAnimationTime * 1000);
}

function startTextAnimation() {
  leftText.classList.remove("hidden");
  const message = "Feliz año mi amor, este es el primero de muchos años juntos, te amo con toda mi vida.\nEsta vez quise hacer algo mas entretenido que solo pasarte un video, asi que arme esta pagina.\nDurante este último tiempo estuve pensando que se me iba a hacer imposible resumir el año que vivimos juntos en solo un video.\nCreo que hice un buen intento y elegí poner un video por cada mes que vivimos juntos. Espero que te guste tanto como a mi me gustó hacerlo.\nTe amo muchito, sos lo mejor que me pasó en la vida y espero poder pasar el resto a tu lado. Gracias por ser como sos, Te amo para siempre gordi.";
  let i = 0;
  letterText.innerHTML = "";
  counter.innerHTML = "";

  let writer = setInterval(() => {
    if (i < message.length) {
      const char = message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
      letterText.innerHTML += char;
      i++;
    } else {
      clearInterval(writer);
      setTimeout(() => {
        startCounter();
      }, 300);
    }
  }, 35);
}

function startCounter() {
  const startDate = new Date("2024-09-18T00:00:00");

  function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return `Juntos hace: ${days} días, ${hours} hs, ${minutes} min, ${seconds} seg`;
  }

  counter.innerHTML = updateCounter();
  counter.style.opacity = "0";
  counter.style.display = "block";

  setTimeout(() => {
    counter.style.opacity = "1";
  }, 100);

  setInterval(() => {
    counter.innerHTML = updateCounter();
  }, 1000);

  const videoButton = document.getElementById("videoButton");
  const videoEmbed = document.getElementById("videoEmbed");

  setTimeout(() => {
    videoButton.classList.add("showButton");
  }, 1000);

  videoButton.addEventListener("click", () => {
  videoEmbed.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/qRfebPx3ZAI?autoplay=1&playsinline=1&rel=0&modestbranding=1"
      style="position: absolute; top:0; left:0; width:100%; height:100%;"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>`;
    
  videoEmbed.classList.remove("hidden");
  videoEmbed.classList.add("fullscreen-video");
  videoEmbed.style.opacity = "1";
  videoButton.style.display = "none";
});
}

startAnimation();
