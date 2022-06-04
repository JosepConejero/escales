import styled from "styled-components";
import { Howl, Howler } from "howler";

const WhiteKey = styled.div`
  width: 30px;
  height: 200px;
  background-color: white;
  border: solid black 2px;
`;

export const Key = ({ keySound }) => {
  /*  let keySound = new Howl({
    src: [sound],
  }); */

  const playNote = () => {
    keySound.play();
  };

  /*   const stopNote = () => {
    sound.stop();
  }; */

  return (
    <>
      <WhiteKey onClick={playNote} />
    </>
  );
};

export default Key;
