import { ReactComponent as Play } from 'icons/play.svg';
import { ReactComponent as Pause } from 'icons/pause.svg';
import { useState, useEffect } from 'react';
import getObj, { createNUpdateObj } from 'utils/fetchfb';
import { useAuth } from 'utils/AuthContext';

const TabelRow = ({ user, index, onClick }) => (
  <div className="row frcs">
    <div className="col fccs">
      <p>{index + 1}</p>
    </div>
    <div className="col fccs">
      <p>{user.name}</p>
    </div>
    <div className="col fccs">
      <p>{user.role}</p>
    </div>
    <div className="col frsc block">
      {user.blocked ? <Play className="action-btn edit" onClick={onClick} /> : <Pause className="action-btn delete" onClick={onClick} />}
    </div>
  </div>
);

const UserManager = ({ setError }) => {
  const { currentUser } = useAuth();
  const [data, setData] = useState(null);

  const getData = async () => {
    const result = await getObj('/users');
    setData(result);
  };

  const blockUser = (uid, user, userState) => {
    if (user.role === 'admin') {
      setError('You can not block admin user!!');
      return;
    }
    if (uid === currentUser.uid) {
      setError('You can not block yourself!!');
      return;
    }
    createNUpdateObj(`/users/${uid}/blocked`, !userState);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return '';
  }

  return (
    <div className="fccs manager-table">
      <div className="header">
        <h2> Manage Users </h2>
      </div>
      <div className="table">
        <div className="row table-header frcs">
          <div className="col fccs">
            <p>#</p>
          </div>
          <div className="col fccs">
            <p>Name</p>
          </div>
          <div className="col fccs">
            <p>Role</p>
          </div>
          <div className="col fccs">
            <p>Action</p>
          </div>
        </div>

        {Object.entries(data).map(([id, user], index) => (
          <TabelRow user={user} id={id} key={index} index={index} onClick={() => blockUser(id, user, user.blocked)} setError={setError} />
        ))}
      </div>
    </div>
  );
};
export default UserManager;
