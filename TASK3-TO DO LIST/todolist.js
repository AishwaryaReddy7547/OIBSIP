function mynote(){
    let x=document.getElementById("input1");
    let y=document.getElementById("demo");
    let z=document.createElement("li");
    z.setAttribute("id","listid");
    z.innerHTML=x.value;
    y.appendChild(z);
    x.value="";
}