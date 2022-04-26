import React from 'react';
import { useRef, useState } from 'react';

export default function Uncontrolled() {

  /*
you have to 'pull' the value from the field when you need it. This can happen when the form is submitted.



*/


  const [storedValue, setStoredValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmitClick = (e) => {
    e.preventDefault();

    console.log(inputRef.current);
    console.log(inputRef.current.value);

    setStoredValue(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmitClick}>Sign up</button>
      <div>{storedValue}</div>
    </div>
  );
}
