let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#reset1");
let msg1=document.querySelector(".msg1")
let msg=document.querySelector("#msg")
let turno=true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
 
boxes.forEach((box)  =>{
    box.addEventListener("click",()=>{
console.log("hello");
if(turno===true){
box.innerText="0"
turno=false
box.classList.add("box0")
}else{
    box.innerText="x"
    turno=true
    box.classList.add("boxx")
}

box.disabled=true;
checkWinner();

    })
})
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText="";
    }
  };const resetGame = () => {
    turnO = true;
 
    enableBoxes();
    msg1.classList.add("hide");
   
  };





showWinner=(winner)=>{
msg.innerText=`congratulation winner is ${winner}`;
msg1.classList.remove("hide");

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
    
let pos1=boxes[pattern[0]].innerText;
let pos2=boxes[pattern[1]].innerText;
let pos3=boxes[pattern[2]].innerText;

if (pos1!=""&& pos2!=""&& pos3!=""){
    if(pos1===pos2 && pos2===pos3){
        console.log("winner",pos1)
        disableBoxes();
        showWinner(pos1);
       
    }
}
}}
newgame.addEventListener("click" ,()=>{
resetGame();
})
reset.addEventListener("click" ,()=>{
    resetGame();
    })

