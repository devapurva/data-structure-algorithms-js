// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

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
