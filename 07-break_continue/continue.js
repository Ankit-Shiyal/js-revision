

let num = 20;

console.log("===== odd number =====");

for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    continue; 
  }
  console.log(i);
}