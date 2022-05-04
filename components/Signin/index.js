import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'utils/AuthContext';
import AuthSidebar from 'shared/AuthSidebar';
import TransIconButton from 'widgets/TransIconButton';
import TransButton from 'widgets/TransButton';
import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import BigInput from 'shared/BigInput';
import BigCheckInput from 'shared/BigCheckInput';
import Alert from 'components/widgets/Alert';

import { ReactComponent as RightArrow } from 'icons/rightArrow.svg';

const Signin = () => {
  const [remeber, setRemeber] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signin, currentUser, logout } = useAuth();
  const router = useRouter();

  // On Submit
  const submit = async () => {
    try {
      setError('');
      setLoading(true);
      await signin(email, password);
    } catch (e) {
      setError(e?.response?.data || e.message || 'Something went wrong, please try again!');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser?.uid) {
      router.push('/');
    }
  }, [currentUser?.uid]);
  return (
    <div className="frcb login-body">
      <AuthSidebar heading="Welcome to Travel Advisor" subHeading="Please signin to continue" />
      <div className="col-60 right-section">
        <div className="container">
          <div className="auth-header">
            <h1>Signin</h1>
            <TransIconButton title="Create New Account" Icon={RightArrow} href="/register" />
          </div>
          <div className="content">
            <BigInput title="Your Email" type="text" placeholder="Enter your email address..." required value={email} onChange={setEmail} />
            <BigInput title="Your Password" type="password" placeholder="Enter your password..." required value={password} onChange={setPassword} />
            <div className="content-line">
              <BigCheckInput title="Remember" checked={remeber} setChecked={setRemeber} />
              <TransButton title="Forgot your password ?" onClick={() => router.push('/forgot-password')} />
            </div>
            <ColoredIconBigButton title="Continue" Icon={RightArrow} onClick={submit} loading={loading} />
          </div>
        </div>
      </div>
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default Signin;
