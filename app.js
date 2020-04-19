function numToString(input) {
  let list = [];
  let num;

  for (let i = 0; i <= input; i++) {
    if (i % 2 === 0) {
      num = "yu";
    }
    else if (i % 3 === 0) {
      num = "gi";
    }
    else if (i % 5 === 0) {
      num = "oh";
    }
    else if (i % 2 === 0 && i % 3 === 0) {
      num = "yu-gi";
    }
    else if (i % 2 === 0  && i % 5 === 0) {
      num = "yu-oh";
    }
    else if (i % 3 === 0  && i % 5 === 0) {
      num = "gi-oh";
    }
    else if (i % 2 === 0 && i % 3 === 0  && i % 5 === 0) {
      num = "yu-gi-oh";
    }
    else {
      num = i;
    }

    list.push(num);
  }
  console.log(list);
  return list;
}

numToString(100);
numToString(22);