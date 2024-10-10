// capitalizer

const capitalize = (str) => {

   const s2 = str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
     
       console.log(s2);

         return s2;

         }

         // reversestring

         const reverseString = (str) => {

           const s2 = str.split(' ').map(s => s.split('').reverse().join('')).join(' ');

             console.log(s2);
               return s2;
                 
                 }

                 // calculator 

                 const cal = (num1, num2, operator) => {
                   
                     let result;
                       if (operator === '+') {
                           result = num1 + num2;
                             } else if (operator === '-') {
                                 result = num1 - num2;
                                   } else if (operator === '*') {
                                       result = num1 * num2;
                                         } else if (operator === '/') {
                                             result = num1 / num2;
                                               } else {
                                                   result = 'Invalid operator';
                                                     }

                                                       console.log(result);
                                                         return result;

                                                         }

                                                         // caesarCipher 

                                                         const caesarCipher = (str, num) => {

                                                           const shiftChar = (char, num) => {
                                                               const charCode = char.charCodeAt(0);
                                                               if (char >= 'A' && char <= 'Z') {
                                                                           return String.fromCharCode(((charCode - 65 + num) % 26) + 65);
                                                                                   }
                                                                                           
                                                                                                   else if (char >= 'a' && char <= 'z') {
                                                                                                               return String.fromCharCode(((charCode - 97 + num) % 26) + 97);
                                                                                                                       }
                                                                                                                               
                                                                                                                                       return char;
                                                                                                                                           }
                                                                                                                                               return Array.from(str).map(char => shiftChar(char, num)).join('');
                                                                                                                                                 } 

                                                                                                                                                 // analyze

                                                                                                                                                 const analyzeArry = (array) => {

                                                                                                                                                   const result = {
                                                                                                                                                       min: array[0],
                                                                                                                                                           max: array[0],
                                                                                                                                                               avg: 0,
                                                                                                                                                                   sum: 0,
                                                                                                                                                                       count: 0
                                                                                                                                                                         };

                                                                                                                                                                           for (let i = 0; i < array.length; i++) {
                                                                                                                                                                               const num = array[i];
                                                                                                                                                                                   result.sum += num;
                                                                                                                                                                                       result.count++;
                                                                                                                                                                                           if (num < result.min) {
                                                                                                                                                                                                 result.min = num;
                                                                                                                                                                                                     }
                                                                                                                                                                                                         if (num > result.max) {
                                                                                                                                                                                                               result.max = num;
                                                                                                                                                                                                                   }
                                                                                                                                                                                                                     }

                                                                                                                                                                                                                       result.avg = result.sum / result.count;

                                                                                                                                                                                                                         console.log(result);
                                                                                                                                                                                                                           return result;
                                                                                                                                                                                                                             
                                                                                                                                                                                                                             }

                                                                                                                                                                                                                             module.exports = {
                                                                                                                                                                                                                                 capitalize,
                                                                                                                                                                                                                                     reverseString,
                                                                                                                                                                                                                                         cal,
                                                                                                                                                                                                                                             caesarCipher,
                                                                                                                                                                                                                                                 analyzeArry
                                                                                                                                                                                                                             };