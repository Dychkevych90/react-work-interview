import React from 'react';
import Input from "../components/input/input";
import {useSelector} from "react-redux";

const PagesOne = () => {
  const text = useSelector(state => state.text);

  return (
    <div>
      <Input/>

      <div>
        i am text from redux on page 1 -- {text}
      </div>
    </div>
  )
}

export default PagesOne;
