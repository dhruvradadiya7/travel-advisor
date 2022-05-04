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

export default BigInput;
