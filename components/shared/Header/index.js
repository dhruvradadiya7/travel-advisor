import { useRouter } from "next/router";
import TransButton from "components/widgets/TransButton";
import { useAuth } from "utils/AuthContext";
import { useEffect, useState } from "react";
const Header = () => {
  const router = useRouter();
  const { currentUser, isAdmin, logout } = useAuth();
  const [uid, setUId] = useState(null);

  useEffect(() => {
    setUId(currentUser?.uid);
  }, [currentUser?.uid]);

  return (
    <div className="header">
      <div className="header-logo_box" onClick={() => router.push("/")}>
        <img src="/images/logo-ta.svg" alt="TA" />
        <h1>Travel Advisor</h1>
      </div>
      <div className="header_actions">
        <TransButton
          onClick={() => router.push("/guidelines")}
          title="Guidelines"
        />
        {uid ? (
          <TransButton
            onClick={() => router.push("/my-dashboard")}
            title="My Dashboard"
          />
        ) : (
          ""
        )}
        {isAdmin ? (
          <>
            <TransButton
              onClick={() => router.push("/manage-sources")}
              title="Manage Sources"
            />
          </>
        ) : (
          ""
        )}
        {uid ? (
          <>
            <TransButton onClick={() => logout()} title="Logout" />
          </>
        ) : (
          <>
            <TransButton
              onClick={() => router.push("/register")}
              title="Register"
            />
            <TransButton
              onClick={() => router.push("/signin")}
              title="Signin"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default Header;
