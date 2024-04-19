let enc=document.querySelector("#enc");
let enbut=document.querySelector("#enbut");
let dec=document.querySelector("#dec");
let decbut=document.querySelector("#decbut")
enbut.addEventListener("click",()=>{
    let text1=enc.value;
    let entext=window.btoa(text1);
    dec.value=entext;
    enc.value="";
});
decbut.addEventListener("click",()=>{
    let text2=dec.value;
    let dectext=window.atob(text2);
    enc.value=dectext;
    dec.value="";
});

