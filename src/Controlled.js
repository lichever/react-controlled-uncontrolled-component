import React from 'react';
import { useRef, useState } from 'react';

export default function Controlled() {


  /*
A controlled input accepts its current value as a prop, as well as a callback to change that value. 
You could say it's a more "React way" of approaching this (which doesn't mean you should always use it).
Which is fine and all... but the value of this input has to live in the state somewhere.

This flow kind of 'pushes' the value changes to the form component, so the Form component always has the current value of the input, without needing to ask for it explicitly.

This means your data (state) and UI (inputs) are always in sync. 

This also means that the form component can respond to input changes immediately; for example, by:

in-place feedback, like validations
disabling the button unless all fields have valid data
enforcing a specific input format, like credit card numbers
But if you don't need any of that and consider uncontrolled to be simpler, go for it.
  */

  const [storedValue, setStoredValue] = useState('');


  const handleNameChange = (event) => {
    setStoredValue(event.target.value);
    console.log(storedValue)
  };


  return (
    <div>
      <input type="text" value={storedValue} onChange={handleNameChange} />
    </div>
  );


}