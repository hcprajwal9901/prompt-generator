import { useState } from "react";

function ResultBox({ result }) {
  const [copied, setCopied] = useState(false);

  if (!result) return null;

  function handleCopy() {
    navigator.clipboard.writeText(result);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="result">
      <div className="result-header">
        <h3>Generated Prompt</h3>
        <button onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre>{result}</pre>
    </div>
  );
}

export default ResultBox;
