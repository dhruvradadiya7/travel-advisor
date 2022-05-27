import { useState, useEffect } from 'react';

const BigInput = ({
  title, type, placeholder, required, half, value, onChange,
}) => (
  <div className={`input-box ${half && 'half'}`}>
    <h3 className="title">
      {title}
      {required && <span className="required-mark">*</span>}
    </h3>
    <input placeholder={placeholder} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export const BigInputDD = ({
  title, type, placeholder, required, half, value, onChange, options,
}) => {
  const [text, setText] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setText(value);
    setFilteredData([]);
  }, [value]);

  const handleInputChange = (v) => {
    setText(v);
    if (v) {
      const vLower = v?.toLowerCase();
      const newData = options.filter((e) => e.code?.toLowerCase()?.includes(vLower) || e.country?.toLowerCase()?.includes(vLower) || e.name?.toLowerCase()?.includes(vLower));
      setFilteredData(newData);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div className={`input-box ${half && 'half'}`} key={title}>
      <h3 className="title">
        {title}
        {required && <span className="required-mark">*</span>}
      </h3>
      <input placeholder={placeholder} type={type} value={text} onChange={(e) => handleInputChange(e.target.value)} onBlur={() => onChange(text)} />

      {!!filteredData.length && (
      <div className="input-box_dd-options fcss">
        {filteredData.map((option) => (
          <button key={option.code} className={`input-box_dd-option frcb ${value === option.code && 'active'}`} type="button" onClick={() => onChange(option.code)}>
            <div className="fcss">
              <p className="input-box_dd-option-country">{option.country}</p>
              <h4>{option.name}</h4>
            </div>
            <p className="input-box_dd-option-code">{option.code}</p>
          </button>
        ))}
      </div>
      )}
    </div>
  );
};

export default BigInput;
