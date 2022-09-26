function createSnow() {
    const snow = document.createElement('div');

    snow.classList.add('snow');

    snow.style.right=Math.random() *100 + "vw";

    snow.style.animationDuration = Math.random() + 3 + "s";

    snow.innerText = "❄️";

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    },5000);
}

setInterval(createSnow, 300);