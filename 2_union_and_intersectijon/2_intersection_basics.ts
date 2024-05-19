/**
 * Intersection
 * 
 * AND의 개념
 */

interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

// 인터섹션을 쓰면 양쪽에 있는 타입이 합쳐진다. 즉, 두개의 인터페이스에서 정의한 모든 프로퍼티들을 담아야한다. 
let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

//number이면서 string일 수 없어서 타입이 never(절대로 존재할 수 없음)가 된다.
type NumberAndString = number & string;
