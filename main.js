import "./style.css";
import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import rolang from "./assets/lang/ro.json";
import enlang from "./assets/lang/en.json";

document.querySelector("#app").innerHTML = `
  <div>
  
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const lang = navigator.language;
let docLang = document.querySelector("html").lang;

if (lang.includes("ro")) {
  docLang = "ro";
  console.log("Romanian language detected", docLang);
  document.querySelector("h1").textContent = rolang.message;
  document.querySelector("title").textContent = rolang.title;
} else {
  docLang = "en";
  console.log("English language detected", docLang);
  document.querySelector("h1").innerHTML = enlang.message;
  document.querySelector("title").textContent = enlang.title;
}

const changeLangBtn = document.querySelector("#lang");

changeLangBtn.addEventListener("click", () => {
  if (docLang === "ro") {
    docLang = "en";
    console.log("English language detected", docLang);
  } else {
    docLang = "ro";
    console.log("Romanian language detected", docLang);
  }
});

setupCounter(document.querySelector("#counter"));
