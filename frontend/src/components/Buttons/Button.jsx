
import "./Button.css";

const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) => {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
