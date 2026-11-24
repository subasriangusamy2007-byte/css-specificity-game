
const heading = document.getElementById("heading");

const rules = [
    {
        name: "Element Selector",
        selector: "h2",
        color: "blue"
    },
    {
        name: "Class Selector",
        selector: ".title",
        color: "green"
    },
    {
        name: "ID Selector",
        selector: "#heading",
        color: "red"
    }
];

let score = 0;

function startGame() {
    const answer = prompt(
        "Which selector has the highest specificity?\n1. h2\n2. .title\n3. #heading\nEnter 1, 2 or 3:"
    );

    if (answer === "3") {
        alert("Correct! You earned 10 points.");
        score += 10;
    } else {
        alert("Try again! ID selector has the highest specificity.");
    }

    alert("Your score: " + score);
}

document.querySelector("button").addEventListener("click", startGame);
