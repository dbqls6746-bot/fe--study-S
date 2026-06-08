/* 여기부터 책의 코드를 작성해주세요 */
// 텍스트 작성과 삭제 즉시 실행 함수
(function () {
    // span 요소 노드 가져오기
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = [
        'Web Publisher',
        'Front-End Developer',
        'Web UI Designer',
        'UX Designer',
        'Back-End Developer'
    ];

    // 배열의 인덱스 초깃값
    let index = 0;
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[ index ].split("");

    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            // 0~100ms 사이에서 무작위로 텍스트 작성
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            currentTxt = spanEl.textContent.split("");
            // 작성이 끝나면 3초 대기 후 지우기 시작
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            // 0~100ms 사이에서 무작위로 텍스트 삭제
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            // 다음 문장으로 인덱스 넘기기
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[ index ].split("");
            writeTxt();
        }
    }

    // 최초 함수 실행
    writeTxt();
})();

/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");

window.addEventListener('scroll', function () {
    requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    // 현재 스크롤 위치 구하기
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    if (browserScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}

/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
    // ① selector 매개변수로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 웹 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;

    // ④ 스크롤 이동
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
};

// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[ i ].addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}