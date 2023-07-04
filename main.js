import './style.scss'

let events = [
  "mouseover",
  "mouseenter",
  "mousemove",
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "mouseout",
  "mouseleave",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
]

window.addEventListener('load', ()=>{
  init();
});

function init(){
  let checkBtn = document.getElementById("check-btn");
  let textarea = document.getElementById("output-area");
  let eventList = document.getElementById('event-list');

  // Set event checkbox & Add event listener
  for(let i=0;i<events.length;i++){
    let checkBox = ""
    if(events[i].includes("move")){
      checkBox = "<li><input type='checkbox' id='check"+String(i+1)+"'><label for='check"+String(i+1)+"'>"+events[i]+"</label></li>";
    }else{
      checkBox = "<li><input type='checkbox' id='check"+String(i+1)+"' checked='checked'><label for='check"+String(i+1)+"'>"+events[i]+"</label></li>";
    }
    eventList.insertAdjacentHTML('beforeend', checkBox);

    checkBtn.addEventListener(events[i], (e) => {
      if(document.getElementById("check"+String(i+1)).checked){
        textarea.value += events[i]+"\n";
      }
    }, false);
  }

  let clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("mousedown", (e) => {
    textarea.value = "";
  }, false);
}