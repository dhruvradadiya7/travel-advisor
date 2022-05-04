import { useState } from 'react';
import { useAuth } from 'utils/AuthContext';
import { useRouter } from 'next/router';
import AuthSidebar from 'shared/AuthSidebar';
import TransIconButton from 'widgets/TransIconButton';
import ColoredIconBigButton from 'components/widgets/CIconBigButton';
import BigInput from 'shared/BigInput';
import Alert from 'components/widgets/Alert';

import { ReactComponent as RightArrow } from 'icons/rightArrow.svg';

const ForgotPassword = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Form fields
  const [email, setEmail] = useState('');

  const { resetPassword } = useAuth();
  const router = useRouter();

  // On Submit
  const submit = async () => {
    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      router.push('/signin');
    } catch (e) {
      setError(e?.response?.data || e.message || 'Something went wrong, please try again!');
    }
    setLoading(false);
  };

  return (
    <div className="frcb login-body">
      <AuthSidebar heading="Welcome to Travel Advisor" subHeading="Enter your email to get reset password link" />
      <div className="col-60 right-section">
        <div className="container">
          <div className="auth-header">
            <h1>Reset Password</h1>
            <TransIconButton title="Go To Signin" Icon={RightArrow} href="/signin" />
          </div>
          <div className="content">
            <BigInput title="Your Email" type="text" placeholder="Enter your email address..." required value={email} onChange={setEmail} />
            <ColoredIconBigButton title="Continue" Icon={RightArrow} onClick={submit} loading={loading} />
          </div>
        </div>
      </div>
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default ForgotPassword;
