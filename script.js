const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.getElementById('main-container');

let noAttempts = 0;

// Create a message element for the joke to appear on screen
const messageText = document.createElement('h3');
messageText.style.color = 'white';
messageText.style.marginTop = '20px';
messageText.style.fontFamily = "'Comic Sans MS', 'Arial Rounded MT Bold', sans-serif";
messageText.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)';
messageText.style.display = 'none'; // Hidden at first
container.appendChild(messageText);

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
    noAttempts++; 
    
    // Use fixed positioning so it physically cannot leave the visible screen
    noBtn.style.position = 'fixed';
    
    // Calculate safe boundaries (keeping it at least 20 pixels away from the edges)
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const x = Math.max(20, Math.random() * maxX);
    const y = Math.max(20, Math.random() * maxY);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Show message on screen every 3rd attempt, hide it on other attempts
    if (noAttempts % 3 === 0) {
        messageText.innerText = "wanna be single forever ?";
        messageText.style.display = 'block';
    } else {
        messageText.style.display = 'none';
    }
}

yesBtn.addEventListener('click', () => {
    // Hide the joke text when she clicks Yes
    messageText.style.display = 'none';
    
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
