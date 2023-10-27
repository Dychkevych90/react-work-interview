import React from 'react';
import Input from "../components/input/input";
import {useSelector} from "react-redux";

const PagesTwo = () => {
  const text = useSelector(state => state.text);

  return (
    <div>
      <Input/>

      <div>
        i am text from redux on page 2 -- {text}
      </div>
    </div>
  )
}

export default PagesTwo;
