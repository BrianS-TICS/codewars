/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  let won = "Player 2 won!";

  switch (p1) {
    case "paper":
      p2 == "paper" ? won = "Draw!" : null;
      p2 == "rock" ? won = "Player 1 won!" : null;
      break;
    case "rock":
      p2 == "scissors" ? won = "Player 1 won!" : null;
      p2 == "rock" ? won = "Draw!" : null;
      break;
    case "scissors":
      p2 == "scissors" ? won = "Draw!" : null;
      p2 == "paper" ? won = "Player 1 won!" : null;
      break;
    default:
      console.log("Fuera de rango")
      break;

  }
  return won;
};