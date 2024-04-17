let rand1 = Math.floor(Math.random() * 6) + 1;
let d1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", `./images/dice${rand1}.png`);

let rand2 = Math.floor(Math.random() * 6) + 1;
let d2 = document
    .querySelectorAll(" img")[1]
  .setAttribute("src", `./images/dice${rand2}.png`);

function winnLoss(r1, r2) {
  if (r1 > r2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
  } else if (r1 < r2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
}

winnLoss(rand1, rand2);
