let Help=document.querySelector("#help");
Help.addEventListener("click", ()=>{
    confirm("Hey User! Tic-Tac-Toe is  two player game. Here each player gets alternate chance .Player1 is supposed to be X and Player2 is supposed to be O. If either of the player becomes sucessful to form sucessive pattern of  O or X either horizontally,vertically or slanted.Then, they will win otherwise Draw will occur.  Thank You ! ")
})
let Box=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let heading=document.querySelector(".msg");
let count=0;
let turnO =true;
const  winpattern=[
    [0,1,2],[0,3,6],
    [0,4,8],[1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
              ];
              

Box.forEach((box) =>{
    box.addEventListener(("click"),()=>{
        if(turnO===true){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O"
            turnO=true;
        }
        box.disabled=true;
        count=count+1;
        let iswinner=checkwinner()
        if(count===9&& !iswinner){
            gameDraw();
        }
    })
})
const gameDraw=()=>{
    heading.innerText=`Oh! Its draw . Lets play again.`
    heading.classList.remove("hide");
    disable();
}
const disable =()=>{
    for(let box of Box){
        box.disabled=true;
    }
    }
    const enable =()=>{
        for(let box of Box){
            box.disabled=false;
            box.innerText="";

        }
        }

const showwinner=(winner) =>{
    heading.innerText=`Congratulations! winner is ${winner}`;
     heading.classList.remove("hide");
     disable();
}

const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1=Box[pattern[0]].innerText;
        let pos2=Box[pattern[1]].innerText;
        let pos3=Box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){

                showwinner(pos1);
                return true;
            }
        }
    }
    }
    const New=()=>{
        turnO=true;
          enable();
          heading.classList.add("hide");

    }
    
    resetbtn.addEventListener("click", ()=>{
        turnO=true;
          enable();
          heading.classList.add("hide");
          count=0;

    });
    


