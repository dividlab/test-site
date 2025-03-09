var myImage = document.querySelector("img");
var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");

myImage.setAttribute("src", "images/firefox-logo-1.png");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (myImage.getAttribute("src") === "images/firefox-logo-1.png") {
        myImage.setAttribute("src", "images/firefox-logo-2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-logo-1.png");
    }
}

function setUserName() {
    var myName = prompt("Set user name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}
 