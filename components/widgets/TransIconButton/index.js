import Link from 'next/link';

const TransIconButton = ({ title, Icon, href }) => (
  <Link href={href}>
    <button type="button" className="trans-icon-button">
      {title}
      <Icon />
    </button>
  </Link>
);

export default TransIconButton;
