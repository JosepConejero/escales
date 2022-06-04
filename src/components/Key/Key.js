import styled from "styled-components";

const WhiteKey = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border: solid black 2px;
`;

export const Key = () => {
  return (
    <>
      <WhiteKey />
    </>
  );
};

export default Key;
