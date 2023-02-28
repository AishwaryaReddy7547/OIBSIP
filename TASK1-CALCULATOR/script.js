var exp = "";


var re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
var result = 0;

var v1 = document.getElementById("one");
var v2 = document.getElementById("two");
var v3 = document.getElementById("three");
var v4 = document.getElementById("four");
var v5 = document.getElementById("five");
var v6 = document.getElementById("six");
var v7 = document.getElementById("seven");
var v8 = document.getElementById("eight");
var v9 = document.getElementById("nine");
var v0 = document.getElementById("zero");
var vplus = document.getElementById("add");
var vminus = document.getElementById("subtract");
var vmultiply = document.getElementById("multiply");
var vdivide = document.getElementById("divide");
var vdot = document.getElementById("decimal");
var vclear = document.getElementById("clear");
var vequals = document.getElementById("equals");

document.getElementById("textbox").value = " ";

function addelem(num) {
    exp += num;
    document.getElementById("textbox").value = exp;
}

function clear() {
    exp = "";
    document.getElementById("textbox").value = exp;
}

function evaluate() {
    if (re.test(exp)) {
        result = eval(exp);
    }
    else {
        result = "Error";
    }
    exp = "";
    document.getElementById("textbox").value = result;
}



v0.addEventListener("click", () => { addelem("0"); });
v1.addEventListener("click", () => { addelem("1"); });
v2.addEventListener("click", () => { addelem("2"); });
v3.addEventListener("click", () => { addelem("3"); });
v4.addEventListener("click", () => { addelem("4"); });
v5.addEventListener("click", () => { addelem("5"); });
v6.addEventListener("click", () => { addelem("6"); });
v7.addEventListener("click", () => { addelem("7"); });
v8.addEventListener("click", () => { addelem("8"); });
v9.addEventListener("click", () => { addelem("9"); });
vplus.addEventListener("click", () => { addelem("+"); });
vminus.addEventListener("click", () => { addelem("-"); });
vmultiply.addEventListener("click", () => { addelem("*"); });
vdivide.addEventListener("click", () => { addelem("/"); });
vdot.addEventListener("click", () => { addelem("."); });
vclear.addEventListener("click", clear);
vequals.addEventListener("click", evaluate);
