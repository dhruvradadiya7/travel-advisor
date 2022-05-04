// Icons
import { ReactComponent as CalenderIcon } from 'icons/calender-sm.svg';
import { useState } from 'react';

const DateSelector = ({ options, active = [], onClick }) => {
  const [open, setOpen] = useState(false);
  if (!active) {
    return null;
  }
  return (
    <div className="custom_date_dd-wrapper">
      <button type="button" className="custom_date_dd-btn frcc" onClick={() => setOpen(!open)}>
        <CalenderIcon />
        <p>{active[1]?.title}</p>
      </button>
      {open && options && (
        <div className="fcss custom_date_dd_options fade-in">
          {Object.entries(options).map(([id, item]) => <button type="button" className={active[0] === id ? 'active' : ''} onClick={() => { onClick([id, item]); setOpen(false); }} key={id}>{item?.title}</button>)}
        </div>
      )}
    </div>
  );
};

export default DateSelector;
