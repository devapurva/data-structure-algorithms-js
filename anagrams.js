function checkAnagram(stringA, stringB) {
  return (
    stringA.toLowerCase().split("").sort().join("") ===
    stringB.toLowerCase().split("").sort().join("")
  );
}

// function checkAnagram(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   } else {
//     for (let char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   let count = {};
//   for (let char of str.toLowerCase()) {
//     count[char] = count[char] + 1 || 1;
//   }

//   return count;
// }

console.log(checkAnagram("race", "care"));
