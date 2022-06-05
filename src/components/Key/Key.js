import styled from "styled-components";
import { Howl, Howler } from "howler";

const WhiteKey = styled.div`
  width: 30px;
  height: 200px;
  background-color: white;
  border: solid black 2px;
  text-align: center;
`;

const BlackKey = styled.div`
  width: 30px;
  height: 125px;
  background-color: black;
  border: solid white 2px;
  color: white;
  text-align: center;
`;

export const Key = ({ keySound, note }) => {
  const playNote = () => {
    keySound.play();
  };

  return (
    <>
      {note === 2 ||
      note === 4 ||
      note === 7 ||
      note === 9 ||
      note === 11 ||
      note === 14 ||
      note === 16 ||
      note === 19 ||
      note === 21 ||
      note === 23 ||
      note === 26 ||
      note === 28 ||
      note === 31 ||
      note === 33 ||
      note === 35 ? (
        <BlackKey onClick={playNote}>{note}</BlackKey>
      ) : (
        <WhiteKey onClick={playNote}>{note}</WhiteKey>
      )}
    </>
  );
};

export default Key;
