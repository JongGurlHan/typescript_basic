/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */

type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

//stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';

/**
 * 리스트의 유니언
 */
//string으로 구성된 리스트 혹은 boolean으로 구성된 리스트
//
type StringListOrBooleanList = string[] | boolean[]

let stringListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담',
]

stringListOrBooleanList = [
    true,
    false,
    false,
    true,
]

//이렇게는 안된다.
// stringListOrBooleanList = [
//     true,
//     '아이유',
// ]

//같이 사용하려면 이렇게 선언해줘야한다. 
type StrOrNumberList = (string | number)[];


let strOrNumberList: StrOrNumberList = [
    '아이유',
    '김고은',
    1
]

/**
 * Interface로 사용하는 union
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '한종걸',
    age: 34,
    address: '대한민국',
}


console.log(animalOrHuman);

animalOrHuman = {
    name: '오리',
    age: 9,
}

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);

type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

/**
 * union은 합집합이라고 생각해도 된다.
 * 근데 최소한 한 쪽타입의 모든 값들이 있어야 한다.
 */
const personOrCat: PersonOrCat = {
    name: '한종걸',
    age: 32,
    breed: '요크셔테리어',
    country: '영국',
}

