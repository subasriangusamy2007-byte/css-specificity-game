
let score = 0;

function startGame() {
    const answer = prompt(
        "Which selector has the highest specificity?\n1. h2\n2. .title\n3. #heading\nEnter 1, 2 or 3:"
    );

    const explanation = document.getElementById("explanation");
    const scoreDisplay = document.getElementById("score");

    if (answer === "3") {
        score += 10;
        explanation.textContent =
            "Correct! ID selectors have higher specificity than class and element selectors.";
    } else {
        explanation.textContent =
            "Incorrect! The ID selector (#heading) has the highest specificity.";
    }

    scoreDisplay.textContent = score;
}

document.querySelector("button").addEventListener("click", startGame);
