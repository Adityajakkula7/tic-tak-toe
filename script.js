let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame =  document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgcontainer");
let turnO = true;

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

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";  
            box.style.color = "brown";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "green";
            turnO = true;
        }
        count++;
        box.disabled = true;
        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      draw();
    }
  });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

function showWinner(winner) {
    msg.innerText = "Congratulations!! Winner is " + winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

function draw() {
    msg.innerText = "Oops!! It's a Draw ";
    msgContainer.classList.remove("hide");

}

const checkWinner = () => {
    for(let  pattern of winPatterns){
         let pos1Val = boxes[pattern[0]].innerText; 
         let pos2Val = boxes[pattern[1]].innerText; 
         let pos3Val = boxes[pattern[2]].innerText; 

         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);