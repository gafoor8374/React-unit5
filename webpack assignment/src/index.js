
import "./index.css"
var root = document.getElementById("root");

console.log("hello")

let logo = document.createElement("div");

logo.className="logo";

var img = document.createElement("img");

img.src = "data:image/jpeg;base64,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"

img.className = "image"

logo.append(img)

var input_box = document.createElement("input")
var btn = document.createElement("button");
btn.innerHTML="Button";
var div = document.createElement("div")
div.className = "input_div"

var option_div = document.createElement("div");
option_div.className = "option_div";

div.append(input_box,btn)

root.append(logo,div);

btn.addEventListener("click",()=>{
    var data = input_box.value;
    console.log(data);
    option_div.innerHTML=data;
})
root.append(option_div)