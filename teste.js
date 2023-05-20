var noButton = document.getElementById('no-button');
var initialX = noButton.offsetLeft;
var initialY = noButton.offsetTop;
var distance = 400;

noButton.addEventListener('mouseover', moveButton);

function moveButton() {
    var randomX = initialX + getRandomOffset(distance);
    var randomY = initialY + getRandomOffset(distance);

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function getRandomOffset(distance) {
    return Math.floor(Math.random() * (2 * distance + 1)) - distance;
}

function hideButton() {
    var yesButton = document.getElementById('yes-button');
    yesButton.classList.add('hidden');
}
