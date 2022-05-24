let position = 0;
const slidesToshow = 3;
const slidesToScroll = 1;
const wrapper = document.querySelector(".slider-wrapper");
const track = document.querySelector(".slider-cards");
// const item = document.querySelector(".card-item");
const btnPrev = document.querySelector(".slider-control-prev");
const btnNext = document.querySelector(".slider-control-next");
const items = document.querySelectorAll(".card-item");
const itemsCount = items.length;
const itemWidth = wrapper.clientWidth / slidesToshow;
const movePosition = slidesToScroll * itemWidth;


items.forEach((item) => {
  item.style.minWidth = `270px`;
})

btnNext.addEventListener("click", () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToshow*itemWidth)/itemWidth;

  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();


});


btnPrev.addEventListener("click", ()=> {
 const itemsLeft = Math.abs(position) /itemWidth;

 position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

 setPosition();
  checkBtns();

});


const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};


const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToshow) * itemWidth;
  
}

checkBtns();

