let i = 0;

function timedCount() {
  i++;
  postMessage(i); // sends data back to the main script
  setTimeout(timedCount, 500);
}

timedCount();
