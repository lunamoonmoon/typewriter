const sentence = "hello there from lighthouse labs";
let n = 50;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + n)
  n += 50;
}

setTimeout(() => {
  console.log("");
}, 1000 + n)
