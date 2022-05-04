import { useState, useEffect } from 'react';
import { useAuth } from 'utils/AuthContext';
import { useRouter } from 'next/router';
import AuthSidebar from 'shared/AuthSidebar';
import TransIconButton from 'widgets/TransIconButton';
import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import BigInput from 'shared/BigInput';
import BigCheckInput from 'shared/BigCheckInput';
import Alert from 'components/widgets/Alert';

import { ReactComponent as RightArrow } from 'icons/rightArrow.svg';
import { createNUpdateObj } from 'utils/fetchfb';

const Register = () => {
  const [remeber, setRemeber] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const { register, setProfile } = useAuth();
  const router = useRouter();

  // On Submit
  const submit = async () => {
    if (!username) {
      return setError('Please enter username!');
    }
    if (password !== cPassword) {
      return setError('Passwords do not match!');
    }
    try {
      setError('');
      setLoading(true);
      const result = await register(email, password);
      await setProfile(username);
      await createNUpdateObj(`/users/${result.user.uid}`, {
        name: username,
        email: result.user.email,
        role: 'standard',
      });
      router.push('/');
    } catch (e) {
      setError(
        e?.response?.data
        || e.message
        || 'Something went wrong, please try again!',
      );
    }
    setLoading(false);
  };

  return (
    <div className="frcb login-body">
      <AuthSidebar
        heading="Hello, nice to meet you"
        subHeading="Just register to join with us"
      />
      <div className="col-60 right-section">
        <div className="container">
          <div className="auth-header">
            <h1>Register</h1>
            <TransIconButton
              title="Already have an account?"
              Icon={RightArrow}
              href="/signin"
            />
          </div>
          <div className="content">
            <BigInput
              title="Username"
              type="text"
              placeholder="Enter username..."
              required
              value={username}
              onChange={setUsername}
            />
            <BigInput
              title="Your Email"
              type="text"
              placeholder="Enter your email address..."
              required
              value={email}
              onChange={setEmail}
            />
            <div className="frcb full-row">
              <BigInput
                title="Your Password"
                type="password"
                placeholder="Enter your password..."
                required
                half
                value={password}
                onChange={setPassword}
              />
              <BigInput
                title="Re-type Password"
                type="password"
                placeholder="Enter password again..."
                required
                half
                value={cPassword}
                onChange={setCPassword}
              />
            </div>
            <div className="content-line">
              <BigCheckInput
                title="Agree with Terms & Conditions"
                checked={remeber}
                setChecked={setRemeber}
              />
            </div>
            <ColoredIconBigButton
              title="Continue"
              Icon={RightArrow}
              onClick={submit}
              loading={loading}
            />
          </div>
        </div>
      </div>
      {error && (
        <Alert type="error" message={error} onClose={() => setError('')} />
      )}
    </div>
  );
};

export default Register;
