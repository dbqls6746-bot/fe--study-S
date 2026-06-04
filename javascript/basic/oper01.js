//operator 연산자

let x = 10;
let y = 10;
let z = '10';

console.log(x + y);
console.log(x -y);

console.log(x+z);

console.log(2 ** 4);//제곱**    //2^4  2*2*2*2*2


// ==    ===
// == 값 같은가
// === 값 + 타입(자료형) 같은가

console.log(x == y);
console.log(x == z);

console.log(x === y);
console.log(x === z);

console.log( x > 5 && y > 0);
console.log( x == 1 || y == '10');

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w+e);

//형변환 (타입변환)
// String()
// Number()

console.log( q + String(e));
console.log( q + Number(w) +e);

console.log( Number('425432'));
console.log( Number('425432.1232'));

if( q == 10){
    console.log("q는 10이더라~");
} 

// &&
q == 11 && console.log('&& 11 확인 출력');
q == 10 && console.log('&& 10 확인 출력');

// true && true
// false || true

console.log( 10 == 10.0);
console.log( 10 === 10.0);
console.log( Number('10') === Number('10.0'));