import { useRouter } from 'next/router';

import '../scss/global.scss';
import '../scss/fonts.scss';
import '../scss/pages.scss';
import AuthProvider, { useAuth } from 'utils/AuthContext';
/*
 * Custom app component to modify app rendering
 */
const isAdminRoutes = (e) => ['/users'].includes(e);
const Wrapper = ({ children }) => {
  const router = useRouter();
  const { currentUser, isAdmin } = useAuth();
  if (currentUser?.uid && isAdminRoutes(router.pathname) && !isAdmin) {
    router.push('/');
    return '';
  }
  return (
    <div className="exe_main-container frss">
      {children}
    </div>
  );
};

const CustomApp = ({ Component, pageProps: pageProperties }) => (
  <AuthProvider>
    <Wrapper>
      <Component {...pageProperties} />
    </Wrapper>
  </AuthProvider>
);

export default CustomApp;
