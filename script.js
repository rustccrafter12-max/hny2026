const messages = [
  "ขอให้มีความสุขมากๆ",
  "ขอให้สมหวังทุกอย่าง",
  "เป็นปีที่รอยยิ้มเปื้อนหน้า",
  "รักตัวเองมากๆ",
  "เป็นปีที่ดีไม่มีเรื่องให้ทุกข์ใจเลยนะ"
];

let index = 0;

const chat = document.getElementById("chat");
const btn = document.getElementById("nextBtn");
const giftOverlay = document.getElementById("giftOverlay");
const popup = document.getElementById("popup");
const typingText = document.getElementById("typingText");
const closePopupBtn = document.getElementById("closePopup");

btn.addEventListener("click", () => {
  if (index < messages.length) {
    addBubble(messages[index]);
    index++;

    if (index === messages.length) {
      btn.textContent = "เปิดของขวัญ 🎁";
    }
  } else {
    showGift();
  }
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

function addBubble(text) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}

function showGift() {
  giftOverlay.classList.add("show");

  setTimeout(() => {
    giftOverlay.classList.remove("show");
    showPopup();
  }, 1200);
}

function showPopup() {
  popup.classList.add("show");
  typeWriter(
    "ขอบคุณที่ปีที่แล้วเข้ามาในชีวิตนะครับ เป็นปีที่มีความสุขมากๆ 💖"
  );
}

function typeWriter(text) {
  typingText.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    typingText.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      startHearts();
    }
  }, 50);
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
