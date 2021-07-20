const words = ["cat","cmt","cst","ict","cot","cit","coort"];
let guessRound = 0;
const endGame = false;
let currentWord = words[Math.floor(Math.random()* words.length)];
let blankToFill = document.querySelector("#blank");
const startGameBtn = document.querySelector(".start-btn");
let currentInput= document.querySelector(".input input");



//make the blankfield to show
function fillBlank(word) {
    blankToFill.textContent = "_ ".repeat(word.length);

}
function fillWithChar(key){
    const contentArray = Array.from(blankToFill.textContent).filter(ele=>ele !==" ");
    console.log(contentArray);
    for(let i = 0; i < currentWord.length; i++){
        if (currentWord[i] === key){
            contentArray[i] = key;
        }
    }
    blankToFill.textContent = contentArray.join(" ");
    console.log(contentArray);
}
//check key
function checkKeyMatch (){
    let currentKey = currentInput.value;
    if (currentWord.includes(currentKey)) {
        fillWithChar(currentKey);
        currentInput.textContent = "";
    }else{
    console.log("false");
    }
    guessRound++;
    
}




/*start game-->show blank-->find user's input charactor-->
check if if matches currentword*/
function renderGame(){
    fillBlank(currentWord);
    currentInput.addEventListener("keyup", checkKeyMatch);
}


startGameBtn.addEventListener("click",renderGame);