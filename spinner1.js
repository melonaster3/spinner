
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1400);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1600);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1800);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2000);



// ... fill in the rest yourself ...