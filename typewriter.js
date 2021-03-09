const sentence = "hello there from lighthouse labs";

let delay = 0

const typewriter = function(){
  for (const char of sentence) {
    setTimeout(()=>{process.stdout.write(char)}, delay);
    delay += 50
  }
  setTimeout(()=>{process.stdout.write("\n")}, delay)
}
typewriter();


