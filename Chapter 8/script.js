let btn1 = document.querySelector('#btn1');

/* 
btn1.onclick = () => {
    console.log("btn1 was clicked");
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}
*/

/* 
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}
*/

/* 
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked");
    // console.log(evt);
    // console.log(evt.type);
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click", handler3);
*/

// Problem 1
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "Light"; //dark
modeBtn.addEventListener("click", () => {
    if(currMode === "Light") {
        currMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});

