body {
  margin: 0;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #f7cfdc, #cfe7f7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* Card */
.card {
  width: 320px;
  background: rgba(255,255,255,0.95);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  z-index: 2;
}

.time {
  font-size: 42px;
  text-align: center;
  color: #5a4b81;
  font-weight: 600;
}

.date {
  text-align: center;
  color: #777;
  margin-bottom: 16px;
}

.chat {
  max-height: 260px;
  overflow-y: auto;
}

.bubble {
  background: #fff1f5;
  border-radius: 16px;
  padding: 10px 14px;
  margin-bottom: 10px;
  font-size: 14px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.next-btn {
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(90deg, #f8a1c4, #9fd3ff);
  color: white;
  font-size: 14px;
  cursor: pointer;
}

/* Gift */
.gift-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  z-index: 5;
}

.gift-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

.gift-box {
  font-size: 120px;
  animation: pop 0.6s ease forwards;
}

@keyframes pop {
  from { transform: scale(0.3); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Popup */
.popup {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  z-index: 10;
}

.popup.show {
  opacity: 1;
  pointer-events: auto;
}

.popup-content {
  width: 280px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  animation: pop 0.4s ease;
}

.popup-content h3 {
  margin-top: 0;
  font-size: 16px;
}

.popup-content p {
  font-size: 14px;
  min-height: 60px;
}

.popup-content button {
  border: none;
  background: #f8a1c4;
  color: white;
  padding: 8px 20px;
  border-radius: 999px;
  cursor: pointer;
}

/* Hearts */
.heart {
  position: fixed;
  bottom: -20px;
  animation: floatUp 4s linear forwards;
  z-index: 1;
}

@keyframes floatUp {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-110vh) scale(1.5);
    opacity: 0;
  }
}
