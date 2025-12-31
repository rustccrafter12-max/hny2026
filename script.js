const messages = [
  "Happy New Year 💕",
  "ขอบคุณที่อยู่ข้างกันมาตลอดปีที่ผ่านมา",
  "ปีนี้อาจไม่ง่ายเสมอไป",
  "แต่มีเธออยู่ตรงนี้ ก็พอแล้ว",
  "ขอให้ปีใหม่ใจดีกับเรา 💖",
  "รักเธอเสมอ 😊"
];

let index = 0;

function nextMessage() {
  if (index < messages.length) {
    document.getElementById("message").innerHTML =
      `<p>${messages[index]}</p>`;
    index++;
  } else {
    document.getElementById("message").innerHTML =
      "<p>🎉 สุขสันต์วันปีใหม่ 🎉</p>";
  }
}
