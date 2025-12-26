function ModalitySelector({ modality, setModality, setResult }) {
  function handleChange(e) {
    setModality(e.target.value);
    setResult(""); // clear previous output
  }

  return (
    <div className="card">
      <label>Choose modality</label>
      <select value={modality} onChange={handleChange}>
        <option value="image">Image</option>
        <option value="video">Video</option>
        <option value="voice">Voice</option>
      </select>
    </div>
  );
}

export default ModalitySelector;
