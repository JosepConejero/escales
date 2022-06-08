import Key from "./components/Key/Key";
import { Howl, Howler } from "howler";
import styled from "styled-components";
import { useState } from "react";
import DigitList from "./components/DigitList/DigitList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadSequenceAction } from "./redux/actions/actionsCreator/actionsCreator";
import InputScale from "./components/InputScale/InputScale";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
`;

const notes = [
  "notes/01-1-Do.mp3",
  "notes/02-1-DoSharp.mp3",
  "notes/03-1-Re.mp3",
  "notes/04-1-ReSharp.mp3",
  "notes/05-1-Mi.mp3",
  "notes/06-1-Fa.mp3",
  "notes/07-1-FaSharp.mp3",
  "notes/08-1-Sol.mp3",
  "notes/09-1-SolSharp.mp3",
  "notes/10-1-La.mp3",
  "notes/11-1-LaSharp.mp3",
  "notes/12-1-Si.mp3",
  "notes/13-2-Do.mp3",
  "notes/14-2-DoSharp.mp3",
  "notes/15-2-Re.mp3",
  "notes/16-2-ReSharp.mp3",
  "notes/17-2-Mi.mp3",
  "notes/18-2-Fa.mp3",
  "notes/19-2-FaSharp.mp3",
  "notes/20-2-Sol.mp3",
  "notes/21-2-SolSharp.mp3",
  "notes/22-2-La.mp3",
  "notes/23-2-LaSharp.mp3",
  "notes/24-2-Si.mp3",
  "notes/25-3-Do.mp3",
  "notes/26-3-DoSharp.mp3",
  "notes/27-3-Re.mp3",
  "notes/28-3-ReSharp.mp3",
  "notes/29-3-Mi.mp3",
  "notes/30-3-Fa.mp3",
  "notes/31-3-FaSharp.mp3",
  "notes/32-3-Sol.mp3",
  "notes/33-3-SolSharp.mp3",
  "notes/34-3-La.mp3",
  "notes/35-3-LaSharp.mp3",
  "notes/36-3-Si.mp3",
  "notes/37-4-Do.mp3",
];

let keySounds = [];

notes.forEach((item, index) => {
  keySounds[index] = new Howl({
    src: [item],
  });
});

const stopNotes = () => {
  keySounds.forEach((sound) => {
    sound.stop();
  });
};

//const initialIntervals = [0, 2, 2, 1, 2, 2, 2, 1]; //jónico //MAYOR
//const intervals = [0, 2, 1, 2, 2, 2, 1, 2]; //dórico
//const intervals = [0, 1, 2, 2, 2, 1, 2, 2]; //frigio
//const intervals = [0, 2, 2, 2, 1, 2, 2, 1]; //lidio
//const intervals = [0, 2, 2, 1, 2, 2, 1, 2]; //mixolidio
//const initialIntervals = [0, 2, 1, 2, 2, 1, 2, 2]; //eólico //MENOR
//const intervals = [0, 1, 2, 2, 1, 2, 2, 2]; //locrio

//const intervals = [0, 1, 2, 1, 2, 1, 2, 1, 2];
//const intervals = [0, 2, 1, 2, 1, 2, 2, 2];

//111111111111
//11111111112 -

let sequence = [];

const obtainSequence = (initialIntervals) => {
  let globalSum = 0;
  let leftToRightSequence = initialIntervals.map((item) => {
    globalSum += item;
    return globalSum;
  });
  let complete = [
    ...leftToRightSequence,
    ...leftToRightSequence.reverse().slice(1, -1),
  ];

  console.log(complete);
  return complete;
};

let orden = 0;
const playArrayNotes = () => {
  //console.log();
  keySounds[sequence[orden]].play();
  orden >= sequence.length - 1 ? (orden = 0) : orden++;
};

const playArpeggio = () => {
  keySounds.forEach((sound) => {
    sound.play();
  });
};

const generateSequence = () => {};

function App() {
  const initialSequence = useSelector((state) => state.sequenceData);
  console.log("initialSequence: ", initialSequence);
  /* useEffect(() => {
    //dispatch(loadSequenceAction(initialSequence));
    //console.log(initialSequence);
  }, [dispatch]);
 */

  //let nIntervId;
  const [nIntervId, setnIntervId] = useState();
  const playSequence = () => {
    sequence = obtainSequence(initialSequence);
    console.log("initSeq: ", initialSequence, "seq: ", sequence);
    //nIntervId = setInterval(playArrayNotes, 500);
    setnIntervId(setInterval(playArrayNotes, 500));
  };

  const stopSequence = () => {
    clearInterval(nIntervId);
    orden = 0;
  };

  return (
    <>
      <Button onClick={stopNotes}>SILENCE</Button>
      <Container className="App">
        {keySounds.map((item, index) => (
          <Key key={index} note={index + 1} keySound={keySounds[index]} />
        ))}
      </Container>
      <Button onClick={playSequence}>PLAY</Button>
      <Button onClick={stopSequence}>STOP</Button>
      <DigitList></DigitList>
      <InputScale></InputScale>
    </>
  );
}

export default App;
