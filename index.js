console.log("file linked")

/**
 * The above code defines two functions to toggle the visibility of HTML and CSS elements.
 */
/**
 * The above code defines two functions to toggle the visibility of HTML and CSS elements.
 */


function toggleVisibility(x) {
if (x === "html") {
    document.getElementById("css").style.visibility = "hidden"
    document.getElementById("html").style.visibility = "visible"
}
else if(x === "css") {
    document.getElementById("css").style.visibility = "visible"
    document.getElementById("html").style.visibility = "hidden"
}
else {
    document.getElementById("css").style.visibility = "visible"
    document.getElementById("html").style.visibility = "visible" 
}
}
// document.getElementById('htmlLogo').addEventListener("click",showHtml)
// document.getElementById('csslogo').addEventListener("click",showCss)


