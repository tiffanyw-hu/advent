var fs = require('fs');

fs.readFile('./02.txt', 'utf8', function(err, contents) {
  console.log(otherdaytwo(contents))
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

function otherdaytwo(str) {
  let arr = str.split("\n")
  arr.pop()
  let counter = 0
  let diff = null
  for (let i = 0; i < arr.length; i++) {
    let elArr = arr[i].split("")
    for (let j = 1; j < arr.length; j++) {
      let other = arr[j].split("")

      let k = 0
      while (k < other.length) {
        if (elArr[i] !== other[i]) {
          counter += 1
          if (counter > 1) {
            break;
          }
          diff = i
        } else {
          k++
        }
      }

    }
  }
  return diff
}
