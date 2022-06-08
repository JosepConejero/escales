//import styled from "styled-components";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSequenceAction } from "../../redux/actions/actionsCreator/actionsCreator";

export const InputScale = () => {
  const dispatch = useDispatch();
  const initialValue = useSelector((state) => state.sequenceData.join(""));
  const [inputValue, setInputValue] = useState(initialValue);

  const changeHandler = (event) => {
    event.preventDefault();
    const scaleBeforeConverting = event.target.value;
    setInputValue(scaleBeforeConverting);
    const scaleAfterConverting = scaleBeforeConverting.split("");
    dispatch(updateSequenceAction(scaleAfterConverting));
  };

  return (
    <>
      <input onChange={changeHandler} value={inputValue}></input>
    </>
  );
};

export default InputScale;
