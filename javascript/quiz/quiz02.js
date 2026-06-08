// 출력결과가 알맞게 나오도록 코드를 추가하세요.

// 조건1. :// 형식이 없으면 경로가 잘못되었습니다.
// 조건2. https로 접속시 secure가 추가됨
// 조건3. http 로 접속시 open이 추가됨
// 조건4. http 접속, https 접속 모두 https 경로로 변경되어 출력됨

// base code

let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));

function changeLink(url) { 
    
    if (!url.includes("://")) {
        return '경로가 잘못되었습니다.';
    }
    
    let parts = url.split("://");
    let domain = parts[1];

    let sub = url.includes("https") ? "secure" : "open";

    return "https://" + sub + "." + domain;
    
}