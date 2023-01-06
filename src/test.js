let n =
  'Thirty-four trillion one hundred twenty-three billion four hundred twelve million three hundred forty-two thousand one hundred';
const hundAnd = (str) => {
  let betterArr = [];
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === 'one' ||
        arr[i] === 'two' ||
        arr[i] === 'three' ||
        arr[i] === 'four' ||
        arr[i] === 'five' ||
        arr[i] === 'six' ||
        arr[i] === 'seven' ||
        arr[i] === 'eight' ||
        arr[i] === 'nine') &&
      i !== 0
    ) {
      betterArr.push(',');
    }

    if (arr[i] === 'hundred' && i !== arr.length - 1) {
      betterArr.push('hundred and');
    } else {
      betterArr.push(arr[i]);
    }
  }
  return betterArr.join(' ');
};

console.log(hundAnd(n));
