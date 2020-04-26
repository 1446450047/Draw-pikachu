let string = `
/*这是一段画皮卡丘的代码，首先我们来清除浏览器的默认样式*/
 * {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
:before,
:after {
  box-sizing: border-box;
}
/*我们开始画皮肤*/
.skin {
  background-color: #ffe600;
  position: relative;
  height: 100vh;
}
/*然后画鼻子*/
.san {
  border: 10px solid black;
  border-color: black transparent transparent transparent;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -10px;
  border-radius: 1px 1px 0 0;
}
.yuan {
  position: absolute;
  background-color: black;
  width: 20px;
  height: 8px;
  top: -18px;
  left: -10px;
  border-radius: 13px 13px 0 0;
}
@keyframes rock {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(10deg);
  }
  66% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/*接下来是眼睛*/
.eyes {
  position: absolute;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 50%;
  top: 60px;
  margin-left: -150px;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #2e2e2e;
  transition: 1s;
}
/*然后是眼珠子*/
.eye::before {
  content: "";
  display: block;
  border: 3px solid black;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  right: -10px;
}
/*画嘴巴，画嘴巴比较难*/
.mouth {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  margin-left: -100px;
  top: 120px;
  overflow: hidden;
  transition: 1s;
}
.mouth:hover {
  transition: 1s;
}
.lips {
  border: 3px solid black;
  width: 100px;
  height: 40px;
  background-color: #ffe600;
  z-index: 10;
  position: absolute;
  top: -15px;
}
.lips.right {
  border-radius: 0 0 0 27px;
  border-color: transparent transparent black black;
  border-bottom-left-radius: 90px 44px;
  transform: rotate(-26deg);
}
.lips.left {
  border-radius: 0 0 27px 0;
  border-color: transparent black black transparent;
  border-bottom-right-radius: 90px 44px;
  right: 0%;
  transform: rotate(26deg);
}
.tongueUp {
  border: 1px solid black;
  height: 1000px;
  position: absolute;
  width: 200px;
  bottom: 0px;
  border-radius: 50%/50%;
  background-color: #9b000a;
  overflow: hidden;
}
.tongueDown {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: -40px;
  border-radius: 100%;
  background-color: #ff485f;
}
/*最后画廉价*/
.face {
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 420px;
  justify-content: space-between;
  left: 50%;
  margin-left: -210px;
  top: 200px;
  transition: 1s;
}
.cheek {
  border: 3px solid black;
  width: 88px;
  height: 88px;
  background-color: #ff0000;
  border-radius: 50%;
}
/*画好了，一个可爱的皮卡丘奉上
* 摸它的嘴巴 它会说话噢。。。
*/

`;
let speed = 50;
let n = 0;
write = () => {
  n++;
  if (n > string.length) {
    imgLeft.src = "./images/lightning.gif";
    imgRight.src = "./images/lightning.gif";
    window.clearInterval(time);
  } else {
    content.innerText = string.substring(0, n);
    style.innerHTML = string.substring(0, n);
    content.scrollTop = 99999;
  }
};

let time;
time = setInterval(write, speed);

btnPause.onclick = () => {
  window.clearInterval(time);
};

btnPlay.onclick = () => {
  window.clearInterval(time);
  time = setInterval(write, speed);
};

playSlow.onclick = () => {
  window.clearInterval(time);
  speed = 200;
  time = setInterval(write, speed);
};

playFast.onclick = () => {
  window.clearInterval(time);
  speed = 0;
  time = setInterval(write, speed);
};
playNormal.onclick = () => {
  window.clearInterval(time);
  speed = 50;
  time = setInterval(write, speed);
};
