document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const hitsSpan = document.getElementById("hits");
  const missesSpan = document.getElementById("misses");
  const resetButton = document.getElementById("reset-button");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  let x = centerX;
  let y = centerY;
  let dx = 5;
  let dy = -2;
  let hits = 0;
  let misses = 0;

  function drawTarget() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#4aacda";
    ctx.fill();
    ctx.closePath();
  }

  function updateScore() {
    hitsSpan.textContent = hits;
    missesSpan.textContent = misses;
  }

  function moveTarget() {
    x += dx;
    y += dy;

    if (x < 20 || x > canvas.width - 20) {
      dx = -dx;
    }

    if (y < 20 || y > canvas.height - 20) {
      dy = -dy;
    }

    drawTarget();
  }

  function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

    if (distance <= 20) {
      hits++;
    } else {
      misses++;
    }

    updateScore();
  }

  function resetScore() {
    hits = 0;
    misses = 0;
    updateScore();
  }

  canvas.addEventListener("click", handleClick);
  resetButton.addEventListener("click", resetScore);

  setInterval(moveTarget, 10);
});
