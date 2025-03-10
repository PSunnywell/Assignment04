function rps() {
    let usersChoice = prompt("Enter rock, paper, or scissors to begin playing").toLowerCase()
   const choices = ["rock", "paper", "scissors"];
   const computersChoice = choices[Math.floor(Math.random() * 3)];
 
   console.log (`You chose ${usersChoice}.`);
   console.log (`The computer chose ${computersChoice}.`);

   if (usersChoice !== 'rock' && usersChoice !== 'paper' && usersChoice!== 'scissors') {
    alert ('Invalid entry. Choose rock or paper or scissors.');
} else {
    if (usersChoice === computersChoice) {
        alert  ("It's a tie.");
    }
     else if (
        (usersChoice === "rock" && computersChoice === "scissors") ||
        (usersChoice === "paper" && computersChoice === "rock") ||
        (usersChoice === "scissors" && computersChoice === "paper")
    ) {
        alert('You win');
} else {
    alert('The computer beat you');
}
}
}