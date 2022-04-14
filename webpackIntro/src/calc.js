const add = (a,b)=>{return a+b}

const mult = (a,b)=>{return a*b;}

let displayNotes = ()=>{
    let ele = document.querySelector("textarea").value;

    let out = document.getElementById("out");

    out.append(ele)
}
let clearNotes = ()=>{
    
}
export {add, mult, displayNotes}