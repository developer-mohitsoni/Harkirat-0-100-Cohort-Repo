//? Create a counter in JS (counts down from 30 to 0):
/*
let count = 30;

function countDown() {
  if (count > 0) {
    console.log(count);
    count--;
    setTimeout(countDown, 1000);
  }
}
countDown();
*/

//? Calculate the time it takes between a setTimeout call and the inner function actually running
/*
function measureDelay(delay) {
    const startTime = performance.now(); // High-resolution timestamp
  
    setTimeout(() => {
      const endTime = performance.now();
      const perceivedDelay = endTime - startTime;
      console.log(`Perceived delay for ${delay}ms: ${perceivedDelay.toFixed(2)}ms`);
    }, delay);
  }
  
  measureDelay(1000); // Test with 1 second delay
  measureDelay(2000); // Test with 2 second delay
  
*/

//? Create a terminal clock (HH:MM:SS) and calculate the time it takes between each second:

/*
function displayTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0'); // Add leading 0 if needed
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    const time = `${hours}:${minutes}:${seconds}`;
    console.clear(); // Clear terminal for clean display
    console.log(time);
  }
  
  const intervalId = setInterval(displayTime, 1000); // Update every second
  
  // Exit on Ctrl+C
  process.on('SIGINT', () => {
    clearInterval(intervalId);
    console.log('Exiting clock...');
    process.exit(0);
  });
  
  displayTime(); // Initial display
  
*/




