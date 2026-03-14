const container = document.getElementById('game-container');
const player = document.getElementById('player');
let score = 0;

// Player movement
document.addEventListener('mousemove', (e) => {
    player.style.left = e.clientX - 30 + 'px';
});

function createEnemy() {
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    enemy.style.left = Math.random() * 90 + 'vw';
    container.appendChild(enemy);

    // Collision detection
    const checkHit = setInterval(() => {
        const pRect = player.getBoundingClientRect();
        const eRect = enemy.getBoundingClientRect();

        if (eRect.bottom >= pRect.top && eRect.left < pRect.right && eRect.right > pRect.left) {
            score++;
            document.getElementById('score').innerText = "Score: " + score;
            enemy.remove();
            clearInterval(checkHit);
        }
    }, 10);

    setTimeout(() => { enemy.remove(); }, 3000);
}

setInterval(createEnemy, 1000);

