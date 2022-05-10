import Header from "components/shared/Header";
import { useEffect } from "react";
import { useAuth } from "utils/AuthContext";
import { useRouter } from "next/router";
const Dashboard = () => {
  const router = useRouter();
  const { currentUser, isAdmin, logout } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <div className="dashboard-body">
      <Header />
      <h1>Dashboard</h1>
    </div>
  );
};
export default Dashboard;
