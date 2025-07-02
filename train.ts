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


// function rotateArray<T>(arr: T[], index: number): T[] {
//     if (index < 0 || index >= arr.length) {
//         throw new Error('Index noto‘g‘ri');
//     }

//     const leftPart: T[] = arr.slice(0, index);
//     const rightPart: T[] = arr.slice(index);

//     return [...rightPart, ...leftPart];
// }


// const result = rotateArray<number>([1, 2, 3, 4, 5, 6], 3);
// console.log(result); 

// function areParenthesesBalanced(str: string): boolean {
//     let count = 0;

//     for (let char of str) {
//         if (char === '(') count++;
//         if (char === ')') count--;

//         if (count < 0) return false;
//     }

//     return count === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"));
// console.log(areParenthesesBalanced("(salom) dunyo )("));

// function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
//   if (arr1.length !== arr2.length) return false;

//   const countElements = (arr: T[]): Record<string, number> => {
//     const count: Record<string, number> = {};
//     for (const el of arr) {
//       const key = JSON.stringify(el);
//       count[key] = (count[key] || 0) + 1;
//     }
//     return count;
//   };

//   const count1 = countElements(arr1);
//   const count2 = countElements(arr2);

//   for (const key in count1) {
//     if (count1[key] !== count2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); 
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); 
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); 



// function findDuplicates(arr: number[]): number[] {
//     const countMap: Record<number, number> = {};
//     const result: number[] = [];

//     for (let num of arr) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     for (let key in countMap) {
//         if (countMap[Number(key)] >= 2) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]));

// function countNumberAndLetters(input: string): { number: number; letter: number } {
//   let numberCount: number = 0;
//   let letterCount: number = 0;

//   for (const char of input) {
//     if (/[0-9]/.test(char)) {
//       numberCount++;
//     } else if (/[a-zA-Z]/.test(char)) {
//       letterCount++;
//     }
//   }

//   return {
//     number: numberCount,
//     letter: letterCount
//   };
// }


// console.log(countNumberAndLetters("string152%\\¥")); 

// function singleNumber(arr: number[]): number | undefined {
//   const countMap = new Map<number, number>();

//   for (const num of arr) {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
//   }

//   for (const [key, value] of countMap.entries()) {
//     if (value === 1) {
//       return key;
//     }
//   }

//   return undefined; 
// }

// console.log(singleNumber([4, 2, 1, 2, 1]));

// function firstUniqueCharIndex(s: string): number {
//   const charCount: Record<string, number> = {};

//   for (const char of s) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (charCount[s[i]] === 1) {
//       return i;
//     }
//   }

//   return -1; 
// }


// console.log(firstUniqueCharIndex("stamp")); 
// console.log(firstUniqueCharIndex("letter")); 
// console.log(firstUniqueCharIndex("aabbcc"));

function sumOfUnique(nums: number[]): number {
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let sum = 0;
  for (const [key, value] of countMap.entries()) {
    if (value === 1) {
      sum += key;
    }
  }

  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2])); 




