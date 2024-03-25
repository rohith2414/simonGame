let gameSeq=[];
let userSeq=[];
let btns=["yellow","purple","green","red"];
let high=0;


let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function (){
    if(started==false)
    {
        
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000/4);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000/4);
}

function levelUp(){
    userSeq=[];
    high++;
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random()*4);
    let randColor=btns[ranIdx];
    
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    
   
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length)
        {
            high++;
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! <b>${level}</b>  <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(this);

    userSeq.push(btn.getAttribute("id"));
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnpress);
}

function reset(){
    level=0;
    gameSeq=[];
    gameSeq=[];
    started=false;

}