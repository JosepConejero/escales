import Digit from "../Digit/Digit";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

export const DigitList = () => {
  return (
    <>
      <Container>
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
      </Container>
    </>
  );
};

export default DigitList;
