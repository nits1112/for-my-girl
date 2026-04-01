const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.getElementById('main-container');

let noAttempts = 0;

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
    noAttempts++; 
    
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.max(10, x)}px`;
    noBtn.style.top = `${Math.max(10, y)}px`;

    if (noAttempts % 3 === 0) {
        setTimeout(() => {
            alert("wanna be single forever ?");
        }, 50);
    }
}

yesBtn.addEventListener('click', () => {
    container.innerHTML = `
        <h1 class="glow-text">I love you bache</h1>
        <div style="font-size: 100px; margin-top: 20px;">❤️</div>
    `;
    for(let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 400);
