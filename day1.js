var fs = require('fs');

fs.readFile('./01.txt', 'utf8', function(err, contents) {
  console.log(otherdayone(contents))
});


function dayone(str) {
  let arr = str.split("\n")
  arr.pop()
  let freq = 0;
  for(let i = 0; i < arr.length; i++) {
    freq += parseInt(arr[i])
  }
  return freq
}

function otherdayone(str) {
  let arr = str.split("\n")
  arr.pop();
  let archives = new Set();
  archives.add(0)
  let freq = 0;
  for(let i = 0; i < arr.length; i++) {
    freq += parseInt(arr[i])
    if (archives.has(freq)) {
      return freq
    } else {
      archives.add(freq)
    }

    if (i === arr.length - 1) {
      i = -1
    }

  }
}
