
// this is for the toggle HTMLbutton difining the variables
let htmlLockToggle = document.getElementById("html-lock-toggle")
let copyHtml = document.getElementById("copy-html")
let htmlCode = document.getElementById("html-code")
let htmlFlag = 0;

// this is function for the toggle button were if the button is clicked it will lock the code and if it is clicked again it will unlock the code
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

// this is function for the copy button were it will copy the code to the clipboard when clicked 
copyHtml.addEventListener("click", function(){
    htmlCode.select();
    htmlCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
})





// this is for the toggle CSSbutton difining the variables
let cssLockToggle = document.getElementById("css-lock-toggle")
let copyCss = document.getElementById("copy-css")
let cssCode = document.getElementById("css-code")
let cssFlag = 0;

// this is function for the toggle CSSbutton were if the button is clicked it will lock the code and if it is clicked again it will unlock the code
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

// this is function for the copy button were it will copy the code to the clipboard when clicked
copyCss.addEventListener("click", function(){
    cssCode.select();
    cssCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
});


// this is for the toggle JavaScript button difining the variables
let jsLockToggle = document.getElementById("js-lock-toggle")
let copyJs = document.getElementById("copy-js")
let jsCode = document.getElementById("js-code")
let jsFlag = 0;

// this is function for the toggle JavaScript button were if the button is clicked it will lock the code and if it is clicked again it will unlock the code
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

// this is function for the copy button were it will copy the code to the clipboard when clicked
copyJs.addEventListener("click", function(){
    jsCode.select();
    jsCode.setSelectionRange(0, 99999);
    document.execCommand("copy");
});



// this is for the run button difining the variables
function run (){
    let htmlCode = document.getElementById("html-code").value
    let cssCode = document.getElementById("css-code").value
    let jsCode = document.getElementById("js-code").value
    let output = document.getElementById("output")

    // this is for the output were it will display the code in the output box

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + " </style>";
    output.contentWindow.eval(jsCode)




}