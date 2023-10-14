let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ["piedra", "papel", "tijera"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    displayChoices(userChoice, computerChoice);

    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);

    if (userScore === 3 || computerScore === 3) {
        showWinner();
    }
}

function displayChoices(user, computer) {
  const resultContainer = document.getElementById("result");

  if (user === computer) {
      const message = `¡Empate! Usuario: ${user} vs Computadora: ${computer}`;
      resultContainer.innerHTML = message;
      alert(message);
  } else {
      resultContainer.innerHTML = `Usuario: ${user} vs Computadora: ${computer}`;
  }
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "empate";
    }

    if ((user === "piedra" && computer === "tijera") ||
        (user === "papel" && computer === "piedra") ||
        (user === "tijera" && computer === "papel")) {
        return "usuario";
    } else {
        return "computadora";
    }
}

function updateScore(winner) {
    if (winner === "usuario") {
        userScore++;
    } else if (winner === "computadora") {
        computerScore++;
    }

    document.getElementById("user-score").innerText = `Usuario: ${userScore}`;
    document.getElementById("computer-score").innerText = `Computadora: ${computerScore}`;
}

function showWinner() {
    let message = userScore === 3 ? "¡El usuario gana!" : "¡La computadora gana!";
    alert(message);
    resetGame();
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").innerText = "Usuario: 0";
    document.getElementById("computer-score").innerText = "Computadora: 0";
    document.getElementById("result").innerHTML = "";
}
