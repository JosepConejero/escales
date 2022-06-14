import Key from "./components/Key/Key";
import { Howl } from "howler";
import styled from "styled-components";
import { useState } from "react";
import DigitList from "./components/DigitList/DigitList";
import { useSelector } from "react-redux";

import InputScale from "./components/InputScale/InputScale";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
`;

const MarkDiv = styled.div`
  margin-top: 25px;
  border: solid black 1px;
  width: 250px;
  padding: 10px;
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

function App() {
  const arpeggioSequence = useSelector((state) => state.arpeggioData);
  const [nIntervId, setnIntervId] = useState();
  let order = 0;

  const playArrayNotes = () => {
    keySounds[arpeggioSequence[order]].play();
    order >= arpeggioSequence.length - 1 ? (order = 0) : order++;
  };

  const playSequence = () => {
    setnIntervId(setInterval(playArrayNotes, 500));
  };

  const stopSequence = () => {
    clearInterval(nIntervId);
    order = 0;
  };

  console.log("entra dentro de App");
  return (
    <>
      <Button onClick={stopNotes}>SILENCE</Button>
      <Button onClick={playSequence}>PLAY</Button>
      <Button onClick={stopSequence}>STOP</Button>
      <Container className="App">
        {keySounds.map((item, index) => (
          <Key key={index} note={index + 1} keySound={keySounds[index]} />
        ))}
      </Container>
      <form name="scales">
        <MarkDiv>
          <div>
            {" "}
            <input type="radio" name="keyboard"></input>
            <label>KEYBOARD</label>
          </div>
          <div>
            <input type="radio" name="keyboard" defaultChecked></input>
            <InputScale></InputScale>
          </div>
          <div>
            <input type="radio" name="keyboard"></input>
            <select id="slcAutos">
              <option value="jónico">jónico - 02212221 (mayor)</option>
              <option value="dórico">dórico - 02122212</option>
              <option value="frigio">frigio - 01222122</option>
              <option value="lidio">lidio - 02221221</option>
              <option value="mixolidio">mixolidio - 02212212</option>
              <option value="eólico">eólico - 02122122 (menor)</option>
              <option value="locrio">locrio - 01221222</option>
              <option value="raruna1">012121212</option>
              <option value="raruna2">02121222</option>
            </select>
          </div>
        </MarkDiv>
      </form>

      <form name="arpeggios">
        <MarkDiv>
          <div>
            {" "}
            <input type="radio" name="arpeg" defaultChecked></input>
            <label>ASCEND / DESCEND</label>
          </div>
          <div>
            <input type="radio" name="arpeg"></input>
            <label>ASCEND</label>
          </div>
          <div>
            <input type="radio" name="arpeg"></input>
            <label>RANDOM</label>
          </div>
        </MarkDiv>
      </form>
      <MarkDiv>SPEED</MarkDiv>
      <MarkDiv>
        ESCALAS: DoM Do#M Re... (cuando pulso una escala, ilumina las teclas que
        esa escala incluye) Si pulso sobre las teclas, me dice qué escalas
        incluyen esas notas Botón de resetear
      </MarkDiv>
    </>
  );
}

export default App;
