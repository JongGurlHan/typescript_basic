/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */

let numberOrString: number | string = 'Code Factory';

//값을 통해 ts은 타입을 유추할 수 있다.
numberOrString;

const decimal = 12.3289;
console.log(decimal.toFixed(2)); // 숫자만큼 소숫점 반올림

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();


// (2) typeof narrowing
numbOrString = Math.random() > 0.5 ? 1123 : '아이유';

if (typeof numbOrString === 'string') {
    numbOrString;
} else {
    numbOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if (nullOrString) { //만약 값이 null이면 js에서 false 취급한다.
    nullOrString; //true일때 string[]
} else {
    nullOrString; // null
}

// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numbOrString2 === stringOrBool2) {
    numbOrString2;
    stringOrBool2;
} else {
    numbOrString2;
    stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?  1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}


// (5) in operator narrowing
interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: '오리',
    type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human); //존재하는 key값의 여부 판별 true

if ('type' in humanOrDog) {
    humanOrDog;
} else {
    humanOrDog;
}


// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
    dateOrString;
} else {
    dateOrString;
}

// (7) Discriminated Union Narrowing
// 위 처럼 하나로 뭉퉁거려서 선언하는 것보다
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // 강아지의 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    };


    if (animal.type === 'human') {
        animal.height;
    } else {
        animal.breed;
        animal.height;
    }
    
    //이렇게 나눠서 선언한 다음에 
    interface Human2 {
        type: 'human';
        height: number;
    }
    
    interface Dog2 {
        type: 'dog',
        breed: string;
    }
    
    interface Fish2{
        type: 'fish';
        length: number;
    }

    //Union으로 묶어주는게 타입을 정확하게 유추하는데 유리하다.
    type HumanOrDog2 = Human2 | Dog2 | Fish2;

    let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height: 177,
    } : Math.random() > 0.5 ? {
        type: 'dog',
        breed: 'Yorkshire Terrier',
    } : {
        type: 'fish',
        length: 12,
    };


    if(humanOrDog2.type === 'human'){
        humanOrDog2;
    }else{
        humanOrDog2;
    }

    // (8) Exhuastiveness Checking
switch(humanOrDog2.type){
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default: //never, 위 의 세개에 걸릴테니까
        humanOrDog2;

        const _check : never = humanOrDog2; //새로 생긴 타입에 따른 알람을 줄 수 있다.
        break;
}