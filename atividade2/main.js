const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alternativeTexts = ['x tortuga', 'Dinochickens', 'Cat', 'Minions', 'Yoda'];

function createThumbnail(imageSrc, altText) {
  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', `images/${imageSrc}`);
  thumbnail.setAttribute('alt', altText);
  thumbnail.addEventListener('click', () => setDisplayedImage(`images/${imageSrc}`));
  return thumbnail;
}

function setDisplayedImage(src) {
  displayedImage.setAttribute('src', src);
}

function toggleMode() {
  if (btn.classList.contains('dark')) {
    setMode('light', 'Modo claro', 'rgba(0, 0, 0, 0.5)');
  } else {
    setMode('dark', 'Modo escuro', 'rgba(0, 0, 0, 0)');
  }
}

function setMode(className, buttonText, backgroundColor) {
  btn.setAttribute('class', className);
  btn.textContent = buttonText;
  overlay.style.backgroundColor = backgroundColor;
}

for (let i = 0; i < imageNames.length; i++) {
  const newImage = createThumbnail(imageNames[i], alternativeTexts[i]);
  thumbBar.appendChild(newImage);
}

btn.addEventListener('click', toggleMode);
