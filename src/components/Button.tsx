export interface ButtonProps {
  clickHandler: () => void;
  label: string;
  size: "small" | "medium" | "large";
  backgroundColor: string;
  color: string;
}

const Button = ({
  clickHandler,
  label,
  size = "medium",
  backgroundColor = "red",
  color,
}: ButtonProps) => {
  let scale = 1;
  if (size === "small") scale = 0.75;
  if (size === "large") scale = 1.5;

  const style: React.CSSProperties = {
    backgroundColor: backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: "0.5rem",
    color,
  };
  return (
    <button onClick={clickHandler} style={style}>
      {label}
    </button>
  );
};

export default Button;
