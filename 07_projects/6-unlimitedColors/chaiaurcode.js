// const num = new Uint8Array(1);
// console.log(num);
// window.crypto.getRandomValues(num);
// alert(num[0])

//generate a randon color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//console.log(randomColor());

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById("start").addEventListener("click", startChangingColor);

document.getElementById("stop").addEventListener("click", stopChangingColor);
