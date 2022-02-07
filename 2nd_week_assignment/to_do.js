let btn=document.getElementById("btn");
function add() {
    let input=document.getElementById("text");
    let ul=document.getElementById("ul-tag");
    let adding_line=document.createElement("li");
    let text_content=document.getElementById("text").value;
    if(text_content=='')
    alert("Please Enter Some Text");
    else
    {
    adding_line.textContent=text_content;
    // ul.appendChild(adding_line);
    // ul.insertBefore(adding_line,ul.childNodes[0]);
    // let adding_span=document.createElement("span");
    // adding_span.textContent="X";
    // adding_span.classList.add("X");
    // adding_line.appendChild(adding_span);
    let a=document.createElement("a");
    a.textContent="X";
    a.href="javascript:void(0)";
    a.className="X";
    adding_line.appendChild(a);
    ul.appendChild(adding_line);
    }
    document.getElementById("text").value="";
}

let span=document.querySelector("ul");
span.addEventListener("click",(e)=>{
    let box=document.getElementById("ul-tag");
    console.log(e.target);
    let li=e.target.parentNode;
    console.log(li);
    box.removeChild(li);
});

