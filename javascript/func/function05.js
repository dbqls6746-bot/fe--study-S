
function func1() {
    let x = 10;
    return x + 20;
}

let value = func1();
console.log(value);


function func2(){

    return ()=>{
        console.log('이것은 함수에서 return 한 함수 호출');
    };
}

const fn = func2();
fn();


function func2(x){

    return (x)=>{
        console.log('이것은 함수에서 return 한 함수 호출');
        console.log('받은 매개변수 : ' + x)
    };
}

const fn3 = func3();
fn3();
fn3(12345);