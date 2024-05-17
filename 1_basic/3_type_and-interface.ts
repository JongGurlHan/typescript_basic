/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
    name: string;
    year: number;
};

const yuJin: IdolType = {
    name: '안유진',
    year: 2002,
}

/**
 * Interface  
 */

interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안유진',
    year: 2002,
}

//인터페이스 안에 타입을 넣을 수 있다.  
interface IdolIT{
    name: NewStringType;
    year: NewNumberType;
}

const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
}

//optional: 있어도 , 없어도 되는 옵션
interface IdolOptional{
    name: string;
    year?: number;
}

const yuJin4 : IdolOptional = {
    name: '안유진',
}

//interface는 객체타입만 정의가능, type과 다르게 primitive 선언 불가능 