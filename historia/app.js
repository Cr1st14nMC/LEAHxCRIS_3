function createStrawberry() {
    const strawberry = document.createElement('div');
    strawberry.classList.add('strawberry');
    strawberry.style.left = Math.random() * 100 + 'vw';
    strawberry.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(strawberry);

    setTimeout(() => {
      strawberry.remove();
    }, 5000);
  }
  setInterval(createStrawberry, 100); // Generar corazones cada 100ms

  setTimeout(() => {
    setInterval(createStrawberry, 50);
  }, 5000);

  /*
  // Cambiar el texto cada 4 segundos
  const texts = [
    "Te dejaré de querer<br>cuando estos corazones se detengan",
    "No hay momento en que no deje de pensar en ti <br>eres tú y quiero que seas siempre tú",
    "No hay nada mas bonito que abrazarte cada noche antes de dormir cielo",
    "Eres mi sol en días grises, mi calma en medio del caos",
    "Contigo, cada momento es un pedacito de cielo.",
    "Tu sonrisa ilumina mi mundo como ninguna otra.",
    "En tus ojos encuentro mi hogar, en tu abrazo mi paz.",
    "Te adoro demasiado, gracias por quererme",
    "Estar contigo es lo más natural y hermoso que me ha pasado.",
    "No quiero a nadieee más, solo a tiiiii",
    "No eres para nada dificíl de querer,<br>si desde que te conoci me llamaste la atenión",
    "Gracias enserio, por hacerme feliz y <br>una mejor persona",
    "Me encantas mucho mi pequeña.",
    "Quieres ser mi novia?"
  ];

  let currentIndex = 0;

  function changeText() {
    const textElement = document.getElementById('text');
    textElement.innerHTML = `<p>${texts[currentIndex]}</p>`;
    currentIndex = (currentIndex + 1) % texts.length;
  }

  setInterval(changeText, 4000); // Cambiar el texto cada 4 segundos
  */

  // Intentar reproducir la música
  // const audio = document.getElementById('myAudio');

  window.addEventListener('load', () => {
    audio.currentTime = 10; // Establece el tiempo de inicio en 10 segundos
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Reproducción automática exitosa");
        })
        .catch(error => {
          console.log("La reproducción automática fue bloqueada: ", error);
          // Intenta reproducir de nuevo después de un breve retraso
          setTimeout(() => {
            audio.play();
          }, 1000);
        });
    }
  });