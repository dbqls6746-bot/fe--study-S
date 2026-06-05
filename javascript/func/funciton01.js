//function 함수

/*
    function 함수명(매개변수){
        실행코드;
        return 리턴값;
    }
*/

function func01(){
    console.log("function01()");
}

func01();  //함수호출

const func02 = function(){
    console.log("func02()");
}

func02();  //함수호출  함수명()

const func03 = function func033(){
    console.log("func03()");
}

//func033(); 인식불가
func03();

const func04 = ()=>{
    console.log("func04()");
}

func04();

//--------------------------------

//함수 + 매개변수

function func05(a, b){
    console.log('func05() ' + a + ' ' + b);
}

func05(10, 20);
func05("A", "B");

const func06 = function(a, b){
    console.log('func06() ' + a + ' ' + b);
}
func06(10, 20);

const func07 = function func077(a, b){
    console.log('func07() ' + a + ' ' + b);
}
func07(10, 20);

const func08 = (x, y)=>{
    console.log('func08() ' + x + ' ' + y);
}
func08("hi", 2000);