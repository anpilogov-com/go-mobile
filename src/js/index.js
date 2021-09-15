let buttonPlay = document.querySelector(".play-button");

buttonPlay.addEventListener("click", () => {
   console.log("Button clicked");
});

let popupToggle = document.querySelector(".pop-up");

let popupWrapper = document.querySelector(".pop-up__wrapper");

let htmlWindow = document.querySelector("html");

popupToggle.addEventListener("click", (e) => {
   popupWrapper.classList.add("pop-up__active");
   htmlWindow.classList.add("scroll-hide");
   e.preventDefault();
});

let popupCloseButton = document.querySelector(".close-button");

popupCloseButton.addEventListener("click", () => {
   popupWrapper.classList.remove("pop-up__active");
});

let scrollPoint = document.querySelector(".scroll__point");
let popupCard = document.querySelector(".pop-up__card");

popupCard.addEventListener("scroll", () => {
   
});
