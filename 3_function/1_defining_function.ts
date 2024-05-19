/**
 * Defining Function
 */

// function printName(name){
//     console.log(name);
// }

function printNmae(name: string){
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
    return `${person1}과 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유', '코드팩토리'));
// returnTwoCouples(0, 1);
// returnTwoCouples('아이유');
// returnTwoCouples('아이유', '코드팩토리', '레드벨벳');

/**
 * Optional Parameter
 */
function mulitplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(mulitplyOrReturn(10, 20));
console.log(mulitplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
// ...args: 매개변수를 무한히 받을 수 있다. , 파라미터 갯수 상관없다.
function getInfiniteParameters(...args: string[]) {
    return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('한종걸', '아이유', '장원영'));
// console.log(getInfiniteParameters(1, 2, 3))


/**
 * Return Type
 */
//function addTwoNumbers(x: number, y: number): number -> 반환타입 자동 유추
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

addTwoNumbers(10, 20);

function randomNumber(){
    return Math.random() > 0.5 ? 10 : '랜덤';
}

randomNumber();

//반환타입 명시
function subtractTwoNumbers(x: number, y: number): number{
    // return '이게 반환이 되나?';
    return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number) : number => {
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */
//void: 아무것도 반환하지 않음
function doNotReturn(): void{
    console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

//never : 반환하는 상황 자체가 만들어지면 안됨
function neverEndingLoop() : never{
    while(true){

    }
}

function throwErro2() : never{
    throw Error();
}