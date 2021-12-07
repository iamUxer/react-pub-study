function add(a, b) {
  return a + b;
}

function addHigher(c, add) {
  const result = c + add;
  return console.log(result);
}

addHigher(10, add(1, 2));
