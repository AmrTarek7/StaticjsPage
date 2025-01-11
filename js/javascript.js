console.log(`${"*".repeat(15)} - Challnge Video 101  - ${"*".repeat(15)}`);
//todo => Html عمل صفحة بكل عناصرها باستخدام الجافاسكريبت وبدون كتابة سطر كود في ملف  <= tod //
// ! Global Elment //

let div = document.createElement("div");

//todo =================================================================>
//!==== Body Style =====//

let body = document.getElementsByTagName("body")[0];

body.style.margin = "0";
body.style.backgroundColor = "rgb(236,236,236)";
body.style.fontFamily = "Tahoma, Arial";

//todo =================================================================>
//!==== Header Element & Style =====//

//! Create Header Element
let header = document.createElement("header");
let divWebsiteLogo = div.cloneNode(false); //? Global Elment لعمل نسخة جديدة منفصلة عن الديف اللي في
let ulElement = document.createElement("ul");

//!  Ul & li In Header
//todo => To Creat 4 li elements contains content of arrayOfListName string
let arrayOfListNavBar = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < arrayOfListNavBar.length; i++) {
  let aLink = document.createElement("a");

  let liElement = document.createElement("li");
  liElement.textContent = arrayOfListNavBar[i];
  aLink.appendChild(liElement);
  ulElement.appendChild(aLink);

  //!style li and alink
  aLink.href = "#";
  aLink.className = "Links";
  aLink.style.textDecoration = "none";
  aLink.style.color = "rgb(75, 73, 73)";
  aLink.style.fontWeight = "500";
  aLink.style.fontFamily = "Verdana, sans-serif";

  //! عند الضغط علي اي لينك في الهيدر هيتحول للون الاحمر
  aLink.addEventListener("click", function (e) {
    e.target.style.color = "rgb(87, 8, 8)";
  });
}

//! Append Child Element In Header
divWebsiteLogo.textContent = "Amr Tarek"; //? Content In h1 In div websiteLogo Header

header.prepend(divWebsiteLogo);
//todo => div2 In header contane with ul &li elements
divWebsiteLogo.after(ulElement);

//! Start Style Header & Header Elements
//? Header elment style
header.style.cssText = `display: flex; justify-content: space-between; padding:.5rem 3rem;
background-color:rgb(255,255,255); align-items: center`;
//? logo - Amr Text Style
divWebsiteLogo.style.color = "rgb(22, 117, 76)";
divWebsiteLogo.style.fontSize = "1.8rem";
divWebsiteLogo.style.fontWeight = "bold";
//? ul style
ulElement.style.listStyleType = "none";
ulElement.style.display = "flex";
ulElement.style.flexWrap = "wrap";
ulElement.style.gap = "2.5rem";
//! End Style Header & Header Element

//todo =================================================================>
//!==== Creat Main Element  =====//

let mainElement = document.createElement("main");

//!====> Style Main Element  =====//
mainElement.style.cssText = `display: flex; flex-wrap: wrap; justify-content:center;
 padding : 1.8rem;gap: 20px ; min-height: calc(100vh - 142px); box-sizing: border-box;`;

// todo => Create Div Product & Span In this Div
for (let i = 1; i < 16; i++) {
  let divProduct = div.cloneNode(true);
  let span = document.createElement("span");

  divProduct.innerText = "Product";
  span.textContent = `${i}`;
  divProduct.className = "product"; //? Div product In Main Elment className

  //! => Append elements
  divProduct.prepend(span);
  mainElement.append(divProduct);

  //! => Styles

  divProduct.style.cssText = ` padding:20px ; background-color:rgb(255,255,255); border:1px solid rgb(221,221,221);
  width :calc((100% - 40px) /3); box-sizing: border-box; text-align: center; color:rgb(136,136,136); border-radius: 6px;`;

  span.style.cssText = `font-size: 40px; color: black; font-weight: normal; display: block; margin: 10px 0px;`;
}

//todo =================================================================>
//!==== Creat Footer Element  =====//

let footer = document.createElement("footer");

footer.innerText = "@Copyright 2025";

//!==== Style Footer Element  =====//
footer.style.backgroundColor = "rgb(35,169,110)";
footer.style.textAlign = "center";
footer.style.padding = "22px";
footer.style.fontSize = "26px";
footer.style.color = "rgb(255,255,255)";

//todo =================================================================>
//! set class Name In Elments

header.setAttribute("class", "website-head"); //? Header className
divWebsiteLogo.className = "logo"; //? h1 in header className
ulElement.className = "menu"; //? div in Header className
mainElement.className = "Content"; //? Main className

//todo =================================================================>
//! Append Child In Body Element

document.body.append(header, mainElement, footer);

//todo => OR

// document.body.appendChild(header);
// document.body.append(mainElement);
// document.body.append(footer);

//todo => OR
// document.body.append(mainElement);
// mainElement.before(header);
// mainElement.after(footer);
