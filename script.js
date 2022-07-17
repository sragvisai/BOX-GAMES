var boxId ;
var copyBox = 0 ;
var count = 0 , boxCount = 0 ;
var timeOut = 3000;

var initialize = function () {
    console.log("Inside initialize");
    
};

let setDifficulty = (count) =>{
    boxCount = count;
    setTheGame();
}

let setTheGame = () =>{
    let chances = 0;
    var choice = document.getElementById("choice");
    choice.style.display = 'none';
    
    //set the display to block
    var container = document.getElementById("demo");
    container.style.display = 'block';
  

    //set the required style for the box and main div
    var boxStyle = "";
    if(boxCount == 20){
        //container.classList.add("boxesEasy");
        boxStyle = "boxEasy";
    }
    else if(boxCount == 42){
        //container.classList.add("boxesMed");
        boxStyle = "boxMed";
        timeOut = 2200;
    }
    else{
        //container.classList.add("boxesHigh");
        boxStyle = "boxHigh";
        timeOut = 1800;
    }

    for(var i = 0 ; i < boxCount ; i++){
        container.innerHTML += `<div class="box" id =${i} onclick="validate(${i})"></div>`
        document.getElementById(i).classList.add(boxStyle);
    }

    const change = setInterval( () =>{
            chances++;
            copyBox = 0;
            makeWhite();
            if(chances == 10)
                stopInterval(change);
        },timeOut);
}

let stopInterval = (change) => {
    clearInterval(change);
    let timer = setTimeout(updateResult,1500);
}

var validate = (divId) =>{

    if (boxId == divId && copyBox == 0){
        console.log("on target");
        copyBox = -1;

        count++;
    }
    else
        copyBox = 0;
        
};
var makeWhite = () => {
    boxId= getRandomArbitrary(0,boxCount).toString();
    document.getElementById(boxId).style.backgroundColor = "white";
    let timer = setTimeout( () => {    
        console.log("Inside set timeout " +boxId + " "+copyBox);  
        document.getElementById(boxId).style.backgroundColor = "red";
        copyBox = 0;
    },timeOut/7);
};
var getRandomArbitrary = function (min, max) {
    return Math.floor((Math.random() * (max - min) + min));
};

var updateResult = () => {
    console.log("Inside update result")
    document.getElementById("result").innerHTML = "Your score "+ count;
}

initialize();
