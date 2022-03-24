const quotes = [
  {
    quote: "허니콤보",
    author: "교촌",
  },
  {
    quote: "뿌링클",
    author: "BHC",
  },
  {
    quote: "황금올리브",
    author: "BBQ",
  },
  {
    quote: "돼지국밥",
    author: "만나뚝닭",
  },
  {
    quote: "고구마피자",
    author: "피자스쿨",
  },
  {
    quote: "단호박골드피자",
    author: "피자알볼로",
  },
  {
    quote: "떡볶이+오뎅튀김+컵밥",
    author: "신전떡볶이",
  },
  {
    quote: "싸이버거세트",
    author: "맘스터치",
  },
  {
    quote: "보쌈+쟁반국수",
    author: "항아리보쌈",
  },
  {
    quote: "몬스터X세트",
    author: "버거킹",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//random()은 0~1사이의 float값을 반환, 소수자리를 버리기 위해 floor()사용
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
