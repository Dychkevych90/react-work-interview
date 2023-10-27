import React from 'react';
import Input from "../components/input/input";
import {useSelector} from "react-redux";

const PagesThree = () => {
  const text = useSelector(state => state.text);

  return (
    <div>
      <Input/>

      <div>
        i am text from redux on page 3 -- {text}
      </div>
    </div>
  )
}

export default PagesThree;
