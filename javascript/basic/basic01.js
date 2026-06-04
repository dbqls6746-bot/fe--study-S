
//javascirpt

console.log("basic01.js");
console.log("text")

//변수선언
// var, let, const

//변수선언 : let
//상수선어 : const
let a = 10;
let b = 20.123;
let c ="안녕하세요";
let d ='작은따옴표'
let e = true;
let f = false;

const g = 30;
const h = "헬로우";

a = 20;
//g = 50; //const변수 (상수형) 변경 불가

console.log('abc');
console.log("abc");
console.log('작은따옴표 "안녕" ㅎㅎ');
console.log("큰따옴표 '안녕' ㅎㅎ");
console.log("큰따옴표 '안녕' \"ㅎㅎ\" ");
console.log(`백틱문자로 감싸면 "큰따옴" '작은따옴' 퍈함`);

let x =20;
let y;

console.log(x);
console.log(y);  //undefined : 정의되지않음

z = 50;
console.log(z); 

// let z = 30;  //불가
var z = 30;
console.log(z);
var z = 20;
console.log(z);  

// 문제 발생시킬 risk 높다!     --- var     --------> let