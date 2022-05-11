/* eslint-disable react/button-has-type */
import Header from 'components/shared/Header';
import AirportManager from './AirportManager';
import UserManager from './UserManager';

const Admin = () => (
  <div className="admin-body">
    <Header />
    <AirportManager />
    <UserManager />
  </div>
);

export default Admin;
