var fs = require('fs');

fs.readFile('./02.txt', 'utf8', function(err, contents) {
  console.log(daytwo(contents))
});

function daytwo(str) {
  let arr = str.split("\n")
  arr.pop()
  // console.log(arr)
  let two = 0
  let three = 0
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    let countHash = {}
    let elArr = arr[i].split("")
    // console.log(elArr)
    for (let j = 0; j < elArr.length; j++) {
      if (countHash.hasOwnProperty(elArr[j])) {
        countHash[elArr[j]] = countHash[elArr[j]] + 1
      } else {
      countHash[elArr[j]] = 1
      }
    }
    let times = new Set();
    times.add(2)
    times.add(3)
    let values = Object.values(countHash)
    for(let i = 0; i < values.length; i++) {
      if (times.has(values[i])) {
        if (values[i] === 2) {
          times.delete(2)
          two += 1
        } else if (values[i] === 3) {
          times.delete(3)
          three += 1
        }
      }
    }


  }

  return two * three
}

// daytwo("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab")
