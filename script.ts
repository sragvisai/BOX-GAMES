


let initialize = () =>{
    console.log("Inside initialize")
    console.log("Random number generated",getRandomArbitrary(1,9));
}


let getRandomArbitrary = (min : number , max : number) => {
    return Math.random() * (max - min) +min;
}



initialize();