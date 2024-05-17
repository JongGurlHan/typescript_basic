/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
let codefactory = 'code factory';
let testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNumber: any = 5;
//console.log(sampleNumber.toUpperCase());
let stringVar = (sampleNumber as string);

console.log(typeof (sampleNumber as string)); //number

let number = 5; 
console.log((number as any).toUpperCase());
// 보통 as는 상속상에서 보다 구체적인 값으로 캐스팅 할때 사용