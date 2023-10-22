
let htmlLockToggle = document.getElementById("html-lock-toggle")
let copyHtml = document.getElementById("copy-html")
let htmlCode = document.getElementById("html-code")
let htmlFlag = 0;

htmlLockToggle.addEventListener("click", function(){
    if(htmlFlag == 0){
        htmlFlag = 1;
        this.innerHTML = "Unlock"
        htmlCode.style.cursor = "no-drop"
        htmlCode.setAttribute("disabled", "disabled")
    }else{
        htmlFlag=0;
        this.innerHTML = "Lock"
        htmlCode.style.cursor = "default"
        htmlCode.removeAttribute("disabled")
    } 
})

copyHtml.addEventListener("click", function(){
    htmlCode.select();
    htmlCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
})



let cssLockToggle = document.getElementById("css-lock-toggle")
let copyCss = document.getElementById("copy-css")
let cssCode = document.getElementById("css-code")
let cssFlag = 0;

cssLockToggle.addEventListener("click", function(){
    if(cssFlag == 0){
        cssFlag = 1;
        this.innerHTML = "Unlock"
        cssCode.style.cursor = "no-drop"
        cssCode.setAttribute("disabled", "disabled")
    }else{
        cssFlag=0;
        this.innerHTML = "Lock"
        cssCode.style.cursor = "default"
        cssCode.removeAttribute("disabled")
    } 
})

copyCss.addEventListener("click", function(){
    cssCode.select();
    cssCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
});


let jsLockToggle = document.getElementById("js-lock-toggle")
let copyJs = document.getElementById("copy-js")
let jsCode = document.getElementById("js-code")
let jsFlag = 0;

jsLockToggle.addEventListener("click", function(){
    if(jsFlag == 0){
        jsFlag = 1;
        this.innerHTML = "Unlock"
        jsCode.style.cursor = "no-drop"
        jsCode.setAttribute("disabled", "disabled")
    }else{
        jsFlag=0;
        this.innerHTML = "Lock"
        jsCode.style.cursor = "default"
        jsCode.removeAttribute("disabled")
    } 
})

copyJs.addEventListener("click", function(){
    jsCode.select();
    jsCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
});







function run (){
    let htmlCode = document.getElementById("html-code").value
    let cssCode = document.getElementById("css-code").value
    let jsCode = document.getElementById("js-code").value
    let output = document.getElementById("output")





    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + " </style>";
    output.contentWindow.eval(jsCode)




}