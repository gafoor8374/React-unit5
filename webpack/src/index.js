import {sum,mul} from "./calc";

import React from "react";
import ReactDOM from "react-dom"
import "./index.css"

console.log(sum(5,4));
console.log(mul(5,4));
console.log(sum(1,3));


//
const root = document.getElementById("root");

const h1 = document.createElement("h1");

h1.innerText ="Hello World";
h1.classList.add("redtext")

root.append(h1)

// after react and dom install

const h1 = React.createElement("h1",{},"Hello React!");
const btn = React.createElement("button",{},"Click Here");
const div = React.createElement("div",{},)
const img = React.createElement(
    "img",
    {src:"https://explore.zoom.us/docs/image/postattendee/postattendee-zoom-united.png"})
const p =React.createElement(
    "p",
{className:"redtext",id:"uniqId"},
h1,
btn,
img
)
ReactDOM.render(
    p, //what we render
    document.getElementById("root") //where to render
)

//after @babel install


ReactDOM.render(
        <div>
         <h1 className="redtext">Hello React</h1>
         <table><th></th></table>
         <img src="https://explore.zoom.us/docs/image/postattendee/postattendee-zoom-united.png"
         height="400px" width="400px"/>
        </div>,      //what we render
        document.getElementById("root") //where to render
    )