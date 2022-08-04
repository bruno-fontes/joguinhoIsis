let operationResult = document.getElementById("operationResult");
let x = document.getElementById("x").innerHTML;
let y = document.getElementById("y").innerHTML;
console.log(x);
var result;


function generateOp(){

    nX = Math.floor(Math.random() * 9) + 1;
}

function createProblem() {
    
    let nX= 1;
    let nY = 9;
    do {
        nX = Math.floor(Math.random() * 9) + 1;
        nY = Math.floor(Math.random() * 9) + 1;
        let operator = Math.floor(Math.random() * 2);
        if(operator == 0){
            result = Number(nX) + Number(nY);
            document.getElementById("operationParagraph").innerHTML = "+";

        }else{
            result = Number(nX) - Number(nY);
            document.getElementById("operationParagraph").innerHTML = "-";
        }
    }while((result) >= 10 || (result) < 0)
    // }else if(operation == "sub"){
    //     while(nX<=nY){
    //         nX = Math.floor(Math.random() * 9) + 1;
    //         nY = Math.floor(Math.random() * 9) + 1;
    //         document.getElementById("btnSub").style["display"] = "block";
    //         document.getElementById("btnAdd").style["display"] = "none";
    //     }
    // }
    
    document.getElementById("x").innerHTML = nX;
    document.getElementById("y").innerHTML = nY;
    nX= 1;
    nY = 9;
    
   
}

function compareAnswer(){
    let answer = document.getElementById("answer").value;
   
    console.log(result, Number(answer));
    if(answer == result){
        operationResult.innerHTML = "CORRETA!";
    }else{
        operationResult.innerHTML = "ERRRRADA!";
    }
}


function add() {
    let nX = document.getElementById("x").innerHTML;
    let nY = document.getElementById("y").innerHTML;
    let result = Number(nX) + Number(nY);
    return(result);
}

function sub(){
    let nX = document.getElementById("x").innerHTML;
    let nY = document.getElementById("y").innerHTML;
    let result = Number(nX) - Number(nY);
    return(result);
}
document.onkeyup = function (event){
    let tecla = Number(event.key);
    document.getElementById('answer').value = tecla;
    compareAnswer()
}
createProblem();