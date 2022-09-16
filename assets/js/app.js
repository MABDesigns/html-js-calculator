function dis(value){
    document.getElementById("screen").value += value;
}

function solve(){
    let x = document.getElementById("screen").value;
    let y = eval(x);
    document.getElementById("screen").value = y;
}

function clr(){
    document.getElementById("screen").value = ""
}

function backspace(){
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}