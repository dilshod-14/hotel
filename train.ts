// function printNumbers() {
//   let i = 1;
//   const timer = setInterval(() => {
//     console.log(i++);
//     if (i > 5) clearInterval(timer);
//   }, 1000);
// }

// printNumbers();


function reverseInteger(num: number): number {
    const reversed = Number(String(Math.abs(num)).split('').reverse().join(''));
    return num < 0 ? -reversed : reversed;
}


console.log(reverseInteger(123456789)); 
console.log(reverseInteger(-98765));    
