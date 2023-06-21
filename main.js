const rules_btn = document.querySelectorAll("button");
const choice = document.querySelector(".choice");
const rules = document.querySelector(".rules");
const close_btn = document.querySelector("#icon-close");

rules_btn[1].addEventListener("click", () => {
    rules.style.display = "flex";
})
close_btn.addEventListener("click", () => {
    if(window.getComputedStyle(picked).display!="flex")
    choice.style.display = "block";
    rules.style.display = "none";
})


//& --------- Game Starts ---------

const all_choices = document.querySelectorAll(".chose-one");
const paper = document.querySelector(".icon-paper");
const rock = document.querySelector(".icon-rock");
const scissors = document.querySelector(".icon-scissors");
const chosen = document.querySelector(".chosen");
const house_chose = document.querySelector(".house");
const picked = document.querySelector(".picked");
var score = document.querySelector("#score");
var end_header = document.querySelector(".end-game h1");

all_choices.forEach(element => {

    element.addEventListener("click", () => {
        chosen.src = element.src;
        chosen.className="";
        for(i=0;i<3;i++)chosen.classList.add(element.classList[i]);
        res = Math.floor(Math.random() * 3);
        house_chose.src = all_choices[res].src;
        house_chose.className="";
        for(i=0;i<3;i++)house_chose.classList.add(all_choices[res].classList[i]);
        picked.style.display = "flex";
        choice.style.display = "none";
        end.style.display = "flex";
        // Scisors picked

        if ((element.alt == "scissors") && (all_choices[res].alt == "paper")) {
            score.textContent = Number(score.textContent) + 1;
            end_header.textContent = "YOU WIN";
        }
        else if ((element.alt == "scissors") && (all_choices[res].alt == "rock")) {
            score.textContent = Number(score.textContent) - 1;
            end_header.textContent = "YOU LOSE";
        }
        else if ((element.alt == "scissors") && (all_choices[res].alt == "scissors"))
            end_header.textContent = "DRAW GAME";

        // paper picked
        if ((element.alt == "paper") && (all_choices[res].alt == "paper"))
            end_header.textContent = "DRAW GAME";
        else if ((element.alt == "paper") && (all_choices[res].alt == "rock")) {
            end_header.textContent = "YOU WIN";
            score.textContent = Number(score.textContent) + 1;
        }
        else if ((element.alt == "paper") && (all_choices[res].alt == "scissors")) {
            end_header.textContent = "YOU LOSE";
            score.textContent = Number(score.textContent) - 1;
        }

        // rock picked
        if ((element.alt == "rock") && (all_choices[res].alt == "paper")) {
            end_header.textContent = "YOU LOSE";
            score.textContent = Number(score.textContent) - 1;
        }
        else if ((element.alt == "rock") && (all_choices[res].alt == "rock"))
            end_header.textContent = "DRAW GAME";
        else if ((element.alt == "rock") && (all_choices[res].alt == "scissors")) {
            end_header.textContent = "YOU WIN";
            score.textContent = Number(score.textContent) + 1;
        }

        if (Number(score.textContent) < 0)
            score.textContent = "0";
    })

});



const end = document.querySelector(".end-game");
const end_btn = document.querySelector("#end-btn");


end_btn.addEventListener("click", () => {
    picked.style.display = "none";
    choice.style.display = "block";
    end.style.display = "none";
})











