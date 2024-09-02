type ButtonProps = {
  className: string;
  type: "button" | "submit" | "reset";
  children: JSX.Element | string;
  onClick: () => void;
};

const Button = ({ className, type, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
