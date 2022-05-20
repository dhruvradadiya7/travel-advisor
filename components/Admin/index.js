/* eslint-disable react/button-has-type */
import Header from 'components/shared/Header';
import Alert from 'components/widgets/Alert';
import { useState } from 'react';
import AirportManager from './AirportManager';
import UserManager from './UserManager';

const Admin = () => {
  const [error, setError] = useState('');
  return (
    <div className="admin-body">
      <Header />
      <AirportManager setError={setError} />
      <UserManager setError={setError} />
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default Admin;
