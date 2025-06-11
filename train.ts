// function printNumbers() {
//   let i = 1;
//   const timer = setInterval(() => {
//     console.log(i++);
//     if (i > 5) clearInterval(timer);
//   }, 1000);
// }

// printNumbers();


// function reverseInteger(num: number): number {
//     const reversed = Number(String(Math.abs(num)).split('').reverse().join(''));
//     return num < 0 ? -reversed : reversed;
// }


// console.log(reverseInteger(123456789)); 
// console.log(reverseInteger(-98765));    

function stringToKebab(str: string): string {
    return str
        .toLowerCase()           
        .split(' ')              
        .filter(word => word)   
        .join('-');              
}

console.log(stringToKebab("I love Kebab"));           
console.log(stringToKebab("Hello World"));            
console.log(stringToKebab("  Multiple   Spaces  "));  
