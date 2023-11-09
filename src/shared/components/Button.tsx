interface ButtonProps {
  onClick: () => void;
  children: string;
  className?: string;
  style?: string;
}

export const Button = (props: ButtonProps) => {
  const { onClick, children, className, style } = props;

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onClick();
  };

  const classNames = `btn-${
    (style || "primary") + className ? " " + className : ""
  }`;

  return (
    <button type="button" className={classNames} onClick={onClickHandler}>
      {children}
    </button>
  );
};
