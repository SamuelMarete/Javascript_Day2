// script.js

function updateClock() {
    const now = new Date(); // Get current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Add leading zero
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Combine into a readable time format
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    // Display the time
    document.getElementById('clock').textContent = timeString;
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock immediately
  updateClock();
  