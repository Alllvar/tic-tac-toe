for (var i = 0; i < 9; i++) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", "box");
    document.getElementById("container").appendChild(newBlock);

}

var boxes = document.getElementsByClassName("box");
var nextStep = "X";
var numberOfClicks = 0;

function testMyGame () {
    numberOfClicks++;
    var haveWinner = false;

    if (boxes[0].innerHTML && boxes[0].innerHTML === boxes[1].innerHTML && boxes[1].innerHTML === boxes[2].innerHTML) {
        alert(boxes[0].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[3].innerHTML && boxes[3].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[5].innerHTML) {
        alert(boxes[3].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[6].innerHTML && boxes[6].innerHTML === boxes[7].innerHTML && boxes[7].innerHTML === boxes[8].innerHTML) {
        alert(boxes[6].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[0].innerHTML && boxes[0].innerHTML === boxes[3].innerHTML && boxes[3].innerHTML === boxes[6].innerHTML) {
        alert(boxes[0].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[1].innerHTML && boxes[1].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[7].innerHTML) {
        alert(boxes[1].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[2].innerHTML && boxes[2].innerHTML === boxes[5].innerHTML && boxes[5].innerHTML === boxes[8].innerHTML) {
        alert(boxes[2].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[0].innerHTML && boxes[0].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML) {
        alert(boxes[0].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if (boxes[2].innerHTML && boxes[2].innerHTML === boxes[4].innerHTML && boxes[4].innerHTML === boxes[8].innerHTML) {
        alert(boxes[2].innerHTML + " is a winner" );
        haveWinner = true;
    }

    if(numberOfClicks === 9 && haveWinner !== true) {
        alert("PAT");
    }
};

var handler = function(event) {
    event.target.innerHTML = nextStep;
    
    if (nextStep === "X") {
        nextStep = "O";
    } else {
        nextStep = "X"; 
    };
    
    testMyGame();
    event.target.removeEventListener("click", handler);
}

for (var i = 0, len = boxes.length; i < len; i++) {
    boxes[i].addEventListener("click", handler)
}
