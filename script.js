let operationResult = document.getElementById("operationResult");
let x = document.getElementById("x").innerHTML;
let y = document.getElementById("y").innerHTML;
console.log(x);

function createProblem(operation, use) {
    
        
    console.log(operation);
    let nX= 1;
    let nY = 9;
    if(operation == "add"){
        while((nY+nX) >= 10){
            nX = Math.floor(Math.random() * 9) + 1;
            nY = Math.floor(Math.random() * 9) + 1;
            document.getElementById("btnAdd").style["display"] = "block";
            document.getElementById("btnSub").style["display"] = "none";
        }
    }else if(operation == "sub"){
        while(nX<=nY){
            nX = Math.floor(Math.random() * 9) + 1;
            nY = Math.floor(Math.random() * 9) + 1;
            document.getElementById("btnSub").style["display"] = "block";
            document.getElementById("btnAdd").style["display"] = "none";
        }
    }
    
    document.getElementById("x").innerHTML = nX;
    document.getElementById("y").innerHTML = nY;
    nX= 1;
    nY = 9;
    
   
}

function compareAnswer(op){
    let answer = document.getElementById("answer").value;
    console.log(op);
    if(op == "add"){
        var correct = add();
    }else{
        var correct = sub();
    }
        
    console.log(correct, Number(answer));
    if(answer == correct){
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
}