// 'hi how are you' == 'Hi How Are You'

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(words.join(" "));
  return words.join(" ");
}

// function capitalize(str) {
//   let capital = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       capital += str[i].toUpperCase();
//     } else {
//       capital += str[i];
//     }
//   }
//   return capital;
// }

capitalize("hi how are you");
