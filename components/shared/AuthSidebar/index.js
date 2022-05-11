import Link from 'next/link';

const AuthSidebar = ({ heading, subHeading }) => (
  <div className="fccs auth-sidebar_container">
    <h2>{heading}</h2>
    <p>{subHeading}</p>

    <Link href="/" className="link">
      Go Back To Home
    </Link>
  </div>
);

export default AuthSidebar;
