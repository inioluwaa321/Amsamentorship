// HERO IMAGE ROTATION
const hero = document.querySelector('.hero');
const images = [
    'https://i.postimg.cc/MKBvZ9vW/IMG-5187.jpg',
    'https://i.postimg.cc/yYRk6LkC/IMG-5189.jpg',
    'https://i.postimg.cc/rF4KyfKV/IMG-5190.jpg',
    'https://i.postimg.cc/tRwsHKRN/IMG-5191.jpg'
];

let current = 0;

function changeHeroImage() {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url('${images[current]}')`;
}

// Initial image
hero.style.backgroundImage = `url('${images[0]}')`;

// Change every 6 seconds
setInterval(changeHeroImage, 6000);
