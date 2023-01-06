import React, { useEffect, useState } from 'react';
import './Number.css';
import { Converter } from 'any-number-to-words';
const converter = new Converter();

const Number = (props) => {
  let number = props.number || 0;
  const [str, setStr] = useState('Null');

  const cap = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const hundAndComma = (str) => {
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
        betterArr.push('and');
        // betterArr.push('\n');
        betterArr.push(arr[i]);
      } else if (arr[i] === 'Zero' && i === 0) {
        betterArr.push('Enter Only Numbers');
      } else {
        betterArr.push(arr[i]);
      }
    }
    return betterArr.join(' ');
  };

  useEffect(() => {
    setStr(hundAndComma(cap(converter.toWords(number))) + '.');
  }, [number, str]);

  return (
    <>
      <h3 className='txt'>{str}</h3>
    </>
  );
};
export default Number;
