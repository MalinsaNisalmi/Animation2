const match = document.getElementById('match');
const bomb = document.getElementById('bomb');

let matchPos = -50; // start position
let speed = 5;

function moveMatch() {
    matchPos += speed;
    match.style.left = matchPos + 'px';

    const matchRect = match.getBoundingClientRect();
    const bombRect = bomb.getBoundingClientRect();

    // Check collision
    if (
        matchRect.right >= bombRect.left &&
        matchRect.left <= bombRect.right &&
        matchRect.bottom >= bombRect.top &&
        matchRect.top <= bombRect.bottom
    ) {
        explode();
        clearInterval(matchInterval);
    }
}

function explode() {
    // Hide bomb and match
    bomb.style.display = 'none';
    match.style.display = 'none';

    // Show explosion
    const blast = document.createElement('div');
    blast.classList.add('blast');
    document.body.appendChild(blast);
    blast.style.display = 'block';

    // Remove explosion after 1.5s
    setTimeout(() => {
        blast.remove();
    }, 1500);
}

const matchInterval = setInterval(moveMatch, 20);
