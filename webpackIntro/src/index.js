import {add,mult,displayNotes} from "./calc.js";
import "./index.css"
import image from "./img.jpg"

let img = document.createElement("img");
img.src = image;

document.getElementById("root").append(img);
document.getElementById("submit").onclick = displayNotes;


console.log(add(5,10));
console.log(mult(5,10));