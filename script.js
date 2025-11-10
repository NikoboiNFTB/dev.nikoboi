let countdown = 5;
const countdownEl =
document.getElementById('countdown');

const interval = setInterval(() => {
    countdown -= 1;
    countdownEl.textContent = countdown;
    if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = "/links";
    }
}, 1000);