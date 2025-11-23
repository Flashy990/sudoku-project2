const SudokuCell = ({ value, isReadonly, isError, onChange }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      onChange(0);
    } else {
      const num = parseInt(val);
      if (num >= 1 && num <= 9) {
        onChange(num);
      }
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[1-9]"
      maxLength={1}
      min="1"
      max="9"
      value={value || ''}
      onChange={handleChange}
      readOnly={isReadonly}
      placeholder=" "
      style={{
        border: isError ? '2px solid #ef4444' : undefined
      }}
    />
  );
};

export default SudokuCell;