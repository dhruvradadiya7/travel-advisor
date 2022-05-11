const ColoredIconBigButton = ({
  title, Icon, onClick, loading,
}) => (
  <button type="button" className="colored-icon-big-button" onClick={onClick} disabled={loading}>
    {title}
    {Icon && <Icon />}
  </button>
);

export default ColoredIconBigButton;
