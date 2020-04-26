//获取脸
let face = document.querySelector(".face");
//获取鼻子
let san = document.querySelector(".san");
//获取嘴巴
let mouth = document.querySelector(".mouth");
//获取眼睛
let eyes = document.querySelectorAll(".eye");
face.onmouseover = () => {
  face.style.width = 500 + "px";
  face.style.marginLeft = -250 + "px";
  san.style.animation = "rock 200ms infinite linear";
  mouth.style.height = 190 + "px";
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].style.width = 70 + "px";
    eyes[i].style.height = 70 + "px";
  }
  pikachu.play();
};
face.onmouseout = () => {
  face.style.width = 420 + "px";
  face.style.marginLeft = -210 + "px";
  san.style.animation = "";
  mouth.style.height = 200 + "px";
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].style.width = 64 + "px";
    eyes[i].style.height = 64 + "px";
  }
  pikachu.pause();
};
