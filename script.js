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
        for(let i=0; i<10;i++){
                document.getElementById('operationResult2').className = 'text-box-green';

        }
        setTimeout(function(){ window. location. reload(); }, 3000);
        
    }else{
        document.getElementById('operationResult2').className = 'text-box-red';
        operationResult.innerHTML = "ERRRRADA!";
        
        setTimeout(function(){ window. location. reload(); }, 3000);
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
// document.addEventListener('keyup', function(e){
//     if(e.keyCode == 13)
//       window.location.reload();
//   })
createProblem();