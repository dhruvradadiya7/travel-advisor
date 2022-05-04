import TransButton from 'components/widgets/TransButton';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuth } from 'utils/AuthContext';

const Landing = () => {
  const { currentUser, logout } = useAuth();

  const [uid, setUId] = useState(null);

  useEffect(() => {
    setUId(currentUser?.uid);
  }, [currentUser?.uid]);

  return (
    <div className="fcss">
      <h1>
        Landing Page
      </h1>
      {uid ? (
        <>
          <p>{uid}</p>
          <TransButton onClick={() => logout()} title="logout" />
        </>
      ) : <Link href="/signin"> Go to signin </Link>}
    </div>
  );
};

export default Landing;
