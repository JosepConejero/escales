//import styled from "styled-components";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArpeggioAction } from "../../redux/actions/actionsCreator/actionsCreator";

export const InputScale = () => {
  const dispatch = useDispatch();
  //const initialValue = useSelector((state) => state.sequenceData.join(""));
  //const [inputValue, setInputValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState("02212221");

  const obtainSequence = (initialIntervals) => {
    let globalSum = 0;
    const initialIntervalsToNumber = initialIntervals.map((char) => +char);
    let leftToRightSequence = initialIntervalsToNumber.map((item) => {
      globalSum += item;
      return globalSum;
    });
    let complete = [
      ...leftToRightSequence,
      ...leftToRightSequence.reverse().slice(1, -1),
    ];
    return complete;
  };

  const changeHandler = (event) => {
    event.preventDefault();
    const scaleBeforeConverting = event.target.value;
    setInputValue(scaleBeforeConverting);
    const arpeggioAfterConverting = obtainSequence(
      scaleBeforeConverting.split("")
    );
    dispatch(updateArpeggioAction(arpeggioAfterConverting));
  };

  return (
    <>
      <input onChange={changeHandler} value={inputValue}></input>
    </>
  );
};

export default InputScale;
