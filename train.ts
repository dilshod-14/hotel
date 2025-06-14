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

// function stringToKebab(str: string): string {
//     return str
//         .toLowerCase()           
//         .split(' ')              
//         .filter(word => word)   
//         .join('-');              
// }

// console.log(stringToKebab("I love Kebab"));           
// console.log(stringToKebab("Hello World"));            
// console.log(stringToKebab("  Multiple   Spaces  "));  


function rotateArray<T>(arr: T[], index: number): T[] {
    if (index < 0 || index >= arr.length) {
        throw new Error('Index noto‘g‘ri');
    }

    const leftPart: T[] = arr.slice(0, index);
    const rightPart: T[] = arr.slice(index);

    return [...rightPart, ...leftPart];
}


const result = rotateArray<number>([1, 2, 3, 4, 5, 6], 3);
console.log(result); 
