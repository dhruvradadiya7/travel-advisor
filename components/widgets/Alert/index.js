import { ReactComponent as CloseIcon } from 'icons/close.svg';

const { useEffect } = require('react');

const Alert = ({ type, message, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 6000);
  }, []);

  return (
    <div className={`frcb global-alert_wrapper ${type}`}>
      <p id="alert-message-fm">{message}</p>
      <CloseIcon onClick={() => onClose()} />
    </div>
  );
};

export default Alert;
