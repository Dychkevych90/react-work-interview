import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setText} from "../../redux-store/actions";

const Input = () => {
const [value, setValue] = useState('')

  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onAdd = (e) => {
    e.preventDefault();

    dispatch(setText(value))
  }

  return (
    <form style={{marginBottom: '40px'}}>
      <input
        type='text'
        placeholder='your text here..'
        onChange={onChange}
      />

      <button
        onClick={(e) => onAdd(e)}
        type='submit'>
        Add
      </button>
    </form>
  )
}

export default Input;
