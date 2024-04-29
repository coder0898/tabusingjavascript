const HTMLBtn = document.getElementById("html-btn");
const CSSBtn = document.getElementById("css-btn");
const JSBtn = document.getElementById("js-btn");
const ReactBtn = document.getElementById("react-btn");
const React_JSBtn = document.getElementById("react_Js-btn");

const Content = document.getElementById("content");

const descriptionArray = [
  [
    "HTML (HyperText Markup Language) is the most basic building block of the Web.",
    "It defines the meaning and structure of web content. ",
    "It's Fundamental of Web Developement.",
  ],
  [
    "Cascading Style Sheets is a stylesheet language used to Style HTML or XML.",
    "It's Fundamental of Web Developement.",
    "CSS describes how elements should be rendered on screen.",
  ],
  [
    "JavaScript (JS) is a lightweight interpreted programming language.",
    "It's Fundamental of Web Developement.",
    "JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative styles.",
  ],
  [
    "React is extremely popular.",
    "It makes building complex, interactive UIs a breeze.",
    "It's powerful & flexible.",
    "It has a very active and versatile ecosystem.",
  ],
  [
    "Vanilla JavaScript requires imperative programming.",
    "Imperative Programming: You define all the steps needed to achieve a result.",
    "React on the other hand embraces declarative programming.",
    "With React, you define the goal and React figures out how to get there.",
  ],
];

const displayContent = (items) => {
  let listItems = "";
  for (const item of items) {
    listItems += `<li>${item}</li>`;
  }
  const ulList = document.createElement("ul");
  ulList.innerHTML = listItems;
  Content.innerHTML = "";
  Content.append(ulList);
};

displayContent(descriptionArray[0]);

HTMLBtn.addEventListener("click", () => {
  displayContent(descriptionArray[0]);
});

CSSBtn.addEventListener("click", () => {
  displayContent(descriptionArray[1]);
});

JSBtn.addEventListener("click", () => {
  displayContent(descriptionArray[2]);
});

ReactBtn.addEventListener("click", () => {
  displayContent(descriptionArray[3]);
});

React_JSBtn.addEventListener("click", () => {
  displayContent(descriptionArray[4]);
});
