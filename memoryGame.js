var arr = [];
var userCount = 1;
var disableTouch = true;
var diffTimeout = 0;

setGame = (level) => {

        if(level == 10){
            diffTimeout = 3500;
        }
        else if(level == 20){
            diffTimeout = 2000;
        }
        else
            diffTimeout = 1500;

        let gameContainer = document.getElementById('gameBox');
        for(var i = 0 ; i < 9 ; i++){
            gameContainer.innerHTML += `<div class ="box" id=${i+1} onclick=verify(${i+1})> </div>`
        }
        
        let boxId = 0 , totalCount = 1 ;
        while(totalCount <= 9){
            boxId= getRandomArbitrary(1,10).toString();
            if(arr.includes(boxId)){
                continue;
            }
            else{
                arr.push(boxId);
                document.getElementById(boxId).innerHTML = `<p class ="numbers"> ${totalCount} </p>`;
                totalCount ++;
            }
        }

        //toggle the display of the boxes
        toggleDisplay();
}

let verify =(boxId) =>{

    if(disableTouch)
        return;

    //get the text content
    let choiceId = document.getElementById(boxId);
    console.log("choice" +choiceId.textContent);
    console.log(" "+userCount.toString()+" ");
    if(choiceId.textContent == " "+userCount.toString()+" ")
    {
        choiceId.style.backgroundColor = "green";
        userCount ++;

        if(userCount == 10){
            disableTouch = true;
            setTimeout(()=>{
                endGame("PASS");
            },500);
        }
    }
    else{
        choiceId.style.backgroundColor = "red";
        disableTouch = true;
        setTimeout(()=>{
            choiceId.style.backgroundColor = "white";
            endGame("FAIL");
        },2000);
    }
}

let endGame = (result) =>{
        for(let i = 0 ; i < userCount ; i++){
            document.getElementById(arr[i]).style.backgroundColor ="white";
        }
    document.getElementById("result").innerHTML = result;
}

let timeoutPromise = (i) =>{
    return new Promise (resolve => {
        setTimeout(()=>{
            document.getElementById(arr[i]).childNodes[0].style.display = "none";
            resolve(2);
        },diffTimeout);
    });
}

let toggleDisplay= async() =>{
    for(let i = 0 ; i <arr.length ; i++){
        document.getElementById(arr[i]).childNodes[0].style.display = "block";
        let resolve = await(timeoutPromise(i));
    }
    disableTouch = false;
}

let getRandomArbitrary = function (min, max) {
    return Math.floor((Math.random() * (max - min) + min));
};