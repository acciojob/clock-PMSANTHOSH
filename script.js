//your JS code here. If required.
const timer = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    timer.textContent = now.toLocaleString();
}

// Display immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
