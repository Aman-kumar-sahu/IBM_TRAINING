var parElem = document.getElementById("app");
parElem.setAttribute("class", "listName");
console.log(parElem);
console.log(parElem.getAttribute("id"));
parElem.removeAttribute("class", "listName");
console.log(parElem.hasAttribute("class", "listName"));
parElem.classList.add("newClass");
var newElem = document.createElement("h1");
//EVENT HANDLING
var bton = document.getElementById("btn");
console.log(bton);
bton.addEventListener("click", function () {
  alert("clicked");
});
console.log(bton);
