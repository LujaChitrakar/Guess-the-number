let number = Math.random() * 100;
number = Math.round(number);
// alert(number);
score = 100;
do {
  score = score - 1;
  a = prompt("Enter a number");
  Number.parseInt(a);
  chance = number;
  if (a > chance) {
    alert("choose smaller");
  } else if (a < chance) {
    alert("choose bigger");
  } else {
    alert(
      `You have chosen the right number in ${
        100 - score
      } chances and your score is ${score}`
    );
  }
} while (a != number);
