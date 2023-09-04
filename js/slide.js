const slides = document.querySelector('.slide-images');
const slideImg = document.querySelectorAll('.slide-images li');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.left');
const next = document.querySelector('.right');

console.log("slideCount : " + slideCount);
console.log("slide : " + currentIdx);

function nextMove() {
    if (currentIdx === 1){
        slides.style.left = -3710 + 'px';
        currentIdx = 2;
    } else if (currentIdx ===2){
        slides.style.left =  0 + 'px';
        currentIdx = 0;
    } else{
        let num = 1;
        slides.style.left = -num * 1860 + 'px';
        currentIdx = 1;
    }
}

let loopSlide = setInterval(() =>{
    nextMove();
}, 5000);

// 슬라이드에 마우스가 올라간 경우 루프 멈추기
slides.addEventListener("mouseover", () => {
    clearInterval(loopSlide);
});

// 슬라이드에서 마우스가 나온 경우 루프 재시작하기
slides.addEventListener("mouseout", () => {
    loopSlide = setInterval(() => {
        nextMove();
    }, 5000);
});


// slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    console.log("num : " + num);
    slides.style.left = -num * 1860 + 'px';
    currentIdx = num;
    console.log("idx" + currentIdx);
}



prev.addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
    이전 버튼 눌러도 아무런 반응 없게 하기 위해
    slide !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx !== 0) {
        clearInterval(loopSlide);
        moveSlide(currentIdx - 1);
    } else{
        clearInterval(loopSlide);
        moveSlide(2);
    }

});
next.addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
    다음 버튼 눌러도 아무런 반응 없게 하기 위해
    slide !==slideCount - 1 일때만
    moveSlide 함수 불러옴 */
    console.log("idc 값 과 count 값 " + currentIdx, slideCount);
    if (currentIdx !== slideCount - 1) {
        clearInterval(loopSlide);
        moveSlide(currentIdx + 1);
    } else{
        clearInterval(loopSlide);
        moveSlide(0);
    }

});