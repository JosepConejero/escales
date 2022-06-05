import { useState } from "react";
import styled from "styled-components";

const UpKey = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border: solid black 1px;
  margin: 0;
  padding: 0;
`;

const Number = styled.p`
  width: 25px;
  height: 25px;
  background-color: white;
  border: solid black 1px;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const DownKey = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border: solid black 1px;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  /* border: solid black 1px; */
`;

export const Digit = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    if (value < 12) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <>
      <Container>
        <UpKey onClick={increment}></UpKey>
        <Number>{value}</Number>
        <DownKey onClick={decrement}></DownKey>
      </Container>
    </>
  );
};

export default Digit;
