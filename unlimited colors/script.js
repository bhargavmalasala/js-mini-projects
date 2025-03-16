const randomColor = function () {
  const hex = "0123456ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
};

const startchangingcolor = function () {
  intervalid = setInterval(changebgcolor, 100);
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopchangingcolor = function () {
    clearInterval(intervalid);
  }


document.querySelector("#start").addEventListener("click", startchangingcolor);
document.querySelector("#stop").addEventListener("click", stopchangingcolor);
