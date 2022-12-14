/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    var mountainHmax=0;
    var target=0;
   // The index of the mountain to fire on.
   for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline()); // represents the height of one mountain.
    if (mountainH > mountainHmax){
        mountainHmax=mountainH;
        target=i;
    }
}

console.log(target);
}
