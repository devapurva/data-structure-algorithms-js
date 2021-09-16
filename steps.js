function printSteps(n, row = 0, stairs = "") {
  if (n === row) {
    return;
  }

  if (n === stairs.length) {
    console.log(stairs);
    return printSteps(n, row + 1);
  }

  if (stairs.length <= row) {
    stairs += "#";
  } else {
    stairs += " ";
  }

  printSteps(n, row, stairs);
}

printSteps(4);
