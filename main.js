import './style.scss'

let events = [
  "mouseover",
  "mouseenter",
  //"mousemove",
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "mouseout",
  "mouseleave",
  "touchstart",
  //"touchmove",
  "touchend",
  "touchcancel",
]

window.addEventListener('load', ()=>{
  init();
});

function init(){
  let checkBtn = document.getElementById("check-btn");
  let textarea = document.getElementById("output-area");

  // Add event listener
  for(let eventName of events){
    checkBtn.addEventListener(eventName, (e) => {
      textarea.value += eventName+"\n";
    }, false);
  }

  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("mousedown", (e) => {
    textarea.value = "";
  }, false);
}