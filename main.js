let title = document.querySelector("h1");
let turn = "x";
let item = [];

// Finish the game
function end(one, two, three) {
  title.textContent = `${item[one].textContent} is the winner!`;
  title.style.backgroundColor = "#050";
  document.getElementById("item" + one).style.backgroundColor =
    "rgb(60, 98, 180)";
  document.getElementById("item" + two).style.backgroundColor =
    "rgb(60, 98, 180)";
  document.getElementById("item" + three).style.backgroundColor =
    "rgb(60, 98, 180)";
  setInterval(() => (title.textContent += "."), 1000);
  setTimeout(() => window.location.reload(), 3000);
}

// Targeting the winner
function winner() {
  for (let i = 1; i < 10; i++) {
    item[i] = document.getElementById("item" + i);
  }

  if (
    item[1].textContent == item[2].textContent &&
    item[2].textContent == item[3].textContent &&
    item[3].textContent != ""
  ) {
    end(1, 2, 3);
  } else if (
    item[1].textContent == item[4].textContent &&
    item[4].textContent == item[7].textContent &&
    item[7].textContent != ""
  ) {
    title.textContent = `${item[1].textContent} is the winner!`;
    end(1, 4, 7);
  } else if (
    item[1].textContent == item[5].textContent &&
    item[5].textContent == item[9].textContent &&
    item[9].textContent != ""
  ) {
    title.textContent = `${item[1].textContent} is the winner!`;
    end(1, 5, 9);
  } else if (
    item[3].textContent == item[5].textContent &&
    item[5].textContent == item[7].textContent &&
    item[7].textContent != ""
  ) {
    title.textContent = `${item[3].textContent} is the winner!`;
    end(3, 5, 7);
  } else if (
    item[3].textContent == item[6].textContent &&
    item[6].textContent == item[9].textContent &&
    item[9].textContent != ""
  ) {
    title.textContent = `${item[3].textContent} is the winner!`;
    end(3, 6, 9);
  } else if (
    item[2].textContent == item[5].textContent &&
    item[5].textContent == item[8].textContent &&
    item[8].textContent != ""
  ) {
    title.textContent = `${item[2].textContent} is the winner!`;
    end(2, 5, 8);
  } else if (
    item[4].textContent == item[5].textContent &&
    item[5].textContent == item[6].textContent &&
    item[6].textContent != ""
  ) {
    title.textContent = `${item[4].textContent} is the winner!`;
    end(4, 5, 6);
  } else if (
    item[7].textContent == item[8].textContent &&
    item[8].textContent == item[9].textContent &&
    item[9].textContent != ""
  ) {
    title.textContent = `${item[7].textContent} is the winner!`;
    end(7, 8, 9);
  } else if (
    item[1].textContent !== "" &&
    item[2].textContent !== "" &&
    item[3].textContent !== "" &&
    item[4].textContent !== "" &&
    item[5].textContent !== "" &&
    item[6].textContent !== "" &&
    item[7].textContent !== "" &&
    item[8].textContent !== "" &&
    item[9].textContent !== ""
  ) {
    title.textContent = `Taugh Game (No Winner!)`;
    title.style.backgroundColor = "#005";

    setInterval(() => (title.textContent += "."), 1000);
    setTimeout(() => window.location.reload(), 3000);
  }
}

// clicking the cards
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.textContent === "") {
    element.textContent = "X";
    title.textContent = "Turn: O";
    turn = "o";
  } else if (turn === "o" && element.textContent === "") {
    element.textContent = "O";
    turn = "x";
    title.textContent = "Turn: X";
  }
  element.style.fontSize = "100px";
  winner();
}
