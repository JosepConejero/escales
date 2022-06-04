import styled from "styled-components";
import { Howl, Howler } from "howler";

const WhiteKey = styled.div`
  width: 50px;
  height: 100px;
  background-color: white;
  border: solid black 2px;
`;

export const Key = () => {
  let sound = new Howl({
    src: ["notes/01-1-Do.mp3"],
  });
  let sound2 = new Howl({
    src: ["notes/03-1-Re.mp3"],
  });

  const playNote = () => {
    sound.play();
  };

  const playNote2 = () => {
    sound2.play();
  };

  const stopNote = () => {
    sound.stop();
  };

  return (
    <>
      <WhiteKey onClick={playNote} />
      <WhiteKey onClick={playNote2} />
      <WhiteKey onClick={stopNote} />
    </>
  );
};

export default Key;
