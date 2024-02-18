export const Icon = ({ icon, hoverColor, tooltipText }) => (
    
  <a
    className={`tooltip hover:${hoverColor}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon} />
    <span className="tooltiptext">{tooltipText}</span>
  </a>
);
