import styled from "styled-components";

const UpKey = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border: solid black 1px;
`;

const Number = styled.p`
  width: 10px;
  height: 10px;
  background-color: white;
  border: solid black 1px;
  text-align: center;
`;

const DownKey = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border: solid black 1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Digit = () => {
  return (
    <>
      <Container>
        <UpKey></UpKey>
        <Number></Number>
        <DownKey></DownKey>
      </Container>
    </>
  );
};

export default Digit;
