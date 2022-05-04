import { ReactComponent as EditIcon } from 'icons/edit.svg';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';
import { ReactComponent as CloseIcon } from 'icons/close.svg';
import { ReactComponent as CheckIcon } from 'icons/check.svg';
import { useEffect, useState } from 'react';

const TableRow = ({
  item, onSubmit, onDelete, empty, setError,
}) => {
  const [edit, setEdit] = useState(empty || false);
  const [date, setDate] = useState(item?.date);
  const [description, setDescription] = useState(item?.description);
  const [remark, setRemark] = useState(item?.remark);
  const [amount, setAmount] = useState(item?.amount);

  useEffect(() => {
    if (edit) {
      setDate(item?.date);
      setDescription(item?.description);
      setRemark(item?.remark);
      setAmount(item?.amount);
    }
  }, [edit]);

  const handleSubmit = () => {
    if (!date) {
      return setError('Please enter Date field to save!');
    }
    if (!description) {
      return setError('Please enter Description field to save!');
    }
    if (!amount) {
      return setError('Please enter Amount field to save!');
    }
    setEdit(false);
    onSubmit({
      date, description, remark, amount,
    }, item?.id);
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className={`exe_main-content_table-row frss ${edit && 'edit'}`} onDoubleClick={() => setEdit(true)}>
      <div className="exe_main-content_table-col fccs col-1">
        {edit ? <input type="date" className="exe_main-content_table-col_input frsc" placeholder="date" onKeyUp={handleKeyUp} value={date || ''} onChange={(e) => setDate(e.target.value)} /> : <p>{item?.date}</p>}
      </div>
      <div className="exe_main-content_table-col fccs col-2">
        {edit ? <input type="text" className="exe_main-content_table-col_input frsc" placeholder="description" onKeyUp={handleKeyUp} value={description || ''} onChange={(e) => setDescription(e.target.value)} /> : <p>{item?.description}</p>}
      </div>
      <div className="exe_main-content_table-col fccs col-2">
        {edit ? <input type="text" className="exe_main-content_table-col_input frsc" placeholder="remark" onKeyUp={handleKeyUp} value={remark || ''} onChange={(e) => setRemark(e.target.value)} /> : <p>{item?.remark}</p>}
      </div>
      <div className="exe_main-content_table-col fccs col-1">
        {edit ? <input type="number" className="exe_main-content_table-col_input max-width frsc" placeholder="amount" onKeyUp={handleKeyUp} value={amount || ''} onChange={(e) => setAmount(e.target.value)} /> : (
          <p>
            $
            {item?.amount}
          </p>
        )}
      </div>
      <div className="exe_main-content_table-row-actions frcc">
        {edit
          ? (
            <button type="button" className="exe_main-content_table-row-action fccc check-btn" onClick={() => handleSubmit()}>
              <CheckIcon />
            </button>
          )
          : (
            <button type="button" className="exe_main-content_table-row-action fccc edit-btn" onClick={() => setEdit(true)}>
              <EditIcon />
            </button>
          )}
        {edit && !empty
          ? (
            <button type="button" className="exe_main-content_table-row-action fccc delete-btn" onClick={() => setEdit(false)}>
              <CloseIcon />
            </button>
          )
          : (
            <button type="button" className="exe_main-content_table-row-action fccc delete-btn" onClick={() => onDelete(item)}>
              <DeleteIcon />
            </button>
          )}
      </div>
    </div>
  );
};

export default TableRow;
