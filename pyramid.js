function pyramid(n, row = 0, level = "") {
  const column = 2 * n - 1;

  if (n === row) {
    return;
  }

  if (level.length === column) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor(column / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = "_";
  }

  pyramid(n, row, level + add);
}

pyramid(4);
