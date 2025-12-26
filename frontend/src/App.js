import { useState } from "react";
import ModalitySelector from "./components/ModalitySelector";
import PromptForm from "./components/PromptForm";
import ResultBox from "./components/ResultBox";
import "./App.css";

function App() {
  const [modality, setModality] = useState("image");
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h1>Prompt Generation Tool</h1>

      <ModalitySelector
        modality={modality}
        setModality={setModality}
        setResult={setResult}
      />

      <PromptForm modality={modality} setResult={setResult} />

      <ResultBox result={result} />
    </div>
  );
}

export default App;
