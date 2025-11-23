let userscore=0;
let comscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscores=document.querySelector("#user-score");
let comscores=document.querySelector("#comp-score");


let gencompchoice=()=>{
    let arr=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return arr[random];

}
let drawgame=() => {
    console.log("game was draw.");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blue"
}

let showWinner=(userwin,userid,comid) => {
    if(userwin){
        userscore++;
        userscores.innerText=userscore;
        console.log("You Win");
        msg.innerText=`You Win! your ${userid} beats ${comid}`
        msg.style.backgroundColor="green";
    }else{
        comscore++;
        comscores.innerText=comscore;
        console.log("You Lose");
        msg.innerText=`You Lose! ${comid} beats your ${userid}`;
        msg.style.backgroundColor="red";
    }
};

let playgame=(userid)=>{
    console.log("user coice=",userid);
    let comid=gencompchoice();
    console.log("com coice=",comid);

    if(userid===comid){
        drawgame();
    }else{
        let userwin=true;
        if(userid==="rock"){
            userwin=comid==="paper"?false:true;
        }else if(userid==="paper"){
            userwin=comid==="rock"?true:false;
        }else{
            userwin=comid=="rock"?false:true;
        }
        showWinner(userwin,userid,comid);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userid=choice.getAttribute("id");
        playgame(userid);

    })
})

