var first = document.getElementById("play");
var second = document.querySelector(".second");
var back = document.getElementById("back");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var lev2 = document.querySelector(".lev2");
var lev3 = document.querySelector(".lev3");
const g1 = document.querySelector(".guessnumber1");
const g2 = document.querySelector(".guessnumber2");
const g3 = document.querySelector(".guessnumber3");

first.addEventListener("click", function () {
  first.style.display = "none";
  second.style.display = "block";
});

var start = document.getElementById("start");
var level1 = document.querySelector(".level1");
var level2 = document.querySelector(".level2");
var level3 = document.querySelector(".level3");

start.addEventListener("click", function () {
  level1.style.display = "block";
  second.style.display = "none";
});

function welcome(para) {
  const welcomeBox = document.getElementById(para);
  if (welcomeBox) {
    welcomeBox.classList.remove("hidden");
    setTimeout(() => {
      welcomeBox.classList.add("hidden");
    }, 1000);
  }
}

start.addEventListener("click", function () {
  welcome("welcomeBox_1");
});
lev2.addEventListener("click", function () {
  welcome("welcomeBox_2");
});
lev3.addEventListener("click", function () {
  welcome("welcomeBox_3");
});

function GenerateRandomNumber(max) {
  var randomNumber;
  return (randomNumber = Math.floor(Math.random() * max) + 1);
}

var randomnumber1 = GenerateRandomNumber(20);
var score1 = 10;

function check1() {
  const enternumber = parseInt(document.querySelector(".guessnumber1").value);

  const result = document.querySelector(".result1");
  const scoreElement = document.querySelector("#score1");

  if (enternumber == randomnumber1) {
    result.textContent = "You are right!";
    scoreElement.textContent = "GO TO";
    alert("You won 🎉");
    lev2.style.display = "block";
  } else {
    score1--;
    if (score1 == 0) {
      result.textContent = " The correct number was " + randomnumber1;
      alert("Game over!");
      scoreElement.textContent = "You have no chances.";
      g1.disabled = true;
    } else if (randomnumber1 > enternumber) {
      result.textContent = "Number is greater then your guess. Try again!";
      scoreElement.textContent = "You have " + score1 + " chances.";
    } else {
      result.textContent = "Number is less then your guess. Try again!";
      scoreElement.textContent = "You have " + score1 + " chances.";
    }
  }
  if (enternumber < 1 || enternumber > 20) {
    alert("Please enter a number between 1 and 20");
    return;
  }
  if (enternumber == null) {
    alert("enter a number");
  }
}

back.addEventListener("click", function () {
  first.style.display = "block";
  second.style.display = "none";
});
back1.addEventListener("click", function () {
  first.style.display = "block";
  second.style.display = "none";
  level1.style.display = "none";
});
back2.addEventListener("click", function () {
  first.style.display = "block";
  second.style.display = "none";
  level1.style.display = "none";
  level2.style.display = "none";
});
back3.addEventListener("click", function () {
  first.style.display = "block";
  second.style.display = "none";
  level1.style.display = "none";
  level2.style.display = "none";
  level3.style.display = "none";
});

lev2.addEventListener("click", function () {
  first.style.display = "none";
  level2.style.display = "block";
});

var score2 = 7;
const randomnumber2 = GenerateRandomNumber(50);

function check2() {
  const enternumber2 = parseInt(document.querySelector(".guessnumber2").value);

  const result2 = document.querySelector(".result2");
  const scoreElement2 = document.querySelector("#score2");

  if (enternumber2 == randomnumber2) {
    result2.textContent = "You are right!";
    scoreElement2.textContent = "GO TO";
    alert("You won 🎊");
    lev3.style.display = "block";
  } else {
    score2--;
    if (score2 == 0) {
      result2.textContent = " The correct number was " + randomnumber2;
      alert("Game over!");
      scoreElement2.textContent = "You have no chances.";
      back1.style.display = "block";
      lev3.style.display = "none";
      g1.disabled = true;
    } else if (randomnumber2 > enternumber2) {
      result2.textContent = "Number is greater then your guess. Try again!";
      scoreElement2.textContent = "You have " + score2 + " chances.";
    } else {
      result2.textContent = "Number is less then your guess. Try again!";
      scoreElement2.textContent = "You have " + score2 + " chances.";
    }
  }
  if (enternumber2 < 1 || enternumber2 > 50) {
    alert("Please enter a number between 1 and 50");
    return;
  }
}

var score3 = 5;
const randomnumber3 = GenerateRandomNumber(100);

function check3() {
  const enternumber3 = parseInt(document.querySelector(".guessnumber3").value);

  const result3 = document.querySelector(".result3");
  const scoreElement3 = document.querySelector("#score3");

  if (enternumber3 == randomnumber3) {
    result3.textContent = "You are right!";
    scoreElement3.textContent = "CONGRATULATION";
    alert("You won 🏆");
  } else {
    score3--;
    if (score3 == 0) {
      result3.textContent = " The correct number was " + randomnumber3;
      alert("Game over!");
      scoreElement3.textContent = "You have no chances.";
      back1.style.display = "block";
      g1.disabled = true;
    } else if (randomnumber3 > enternumber3) {
      result3.textContent = "Number is greater then your guess. Try again!";
      scoreElement3.textContent = "You have " + score3 + " chances.";
    } else {
      result3.textContent = "Number is less then your guess. Try again!";
      scoreElement3.textContent = "You have " + score3 + " chances.";
    }
  }
  if (enternumber3 < 1 || enternumber3 > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }
}

lev3.addEventListener("click", function () {
  first.style.display = "none";
  level3.style.display = "block";
});

function resetGame() {
  score1 = 10;
  score2 = 7;
  score3 = 5;
  g1.disabled = false;
  g2.disabled = false;
  g3.disabled = false;
  g1.value = "";
  g2.value = "";
  g3.value = "";
  randomnumber1 = GenerateRandomNumber(20);
  randomnumber2 = GenerateRandomNumber(50);
  randomnumber3 = GenerateRandomNumber(100);
}
