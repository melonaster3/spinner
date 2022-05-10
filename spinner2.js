let counter = 100;
let spinner = ['\r|   ','\r|   ','\r/   ','\r\\   ','\r|   ' ]
while(counter <= 1700){
for (let rotate of spinner){
    setTimeout (() => {
      process.stdout.write(rotate);
    },counter);
    counter += 200;
  }
}

