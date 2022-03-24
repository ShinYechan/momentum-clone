const backgrounds = ["bg_0.png", "bg_1.png", "bg_2.png"];

const chosenImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
//html 태그를 생성, 바로 html상에 추가되지는 않음
const bgImage = document.createElement("img");
//<img>의 src속성 추가
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
