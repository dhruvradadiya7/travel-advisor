import { ReactComponent as CheckIcon } from 'icons/inputCheckIcon.svg';

const BigCheckInput = ({
  checked = false, title, required, setChecked,
}) => (
  <div className="check-input-box" onClick={() => setChecked(!checked)}>
    <div className={`checkbox-container ${checked && 'active-container'}`}>
      <CheckIcon className="check-icon" hidden={!checked} />
    </div>
    <div className="title">
      {title}
      <span className="required-mark" hidden={!required}>*</span>
    </div>
  </div>
);

export default BigCheckInput;
