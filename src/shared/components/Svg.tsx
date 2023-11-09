interface SvgProps {
  name: string;
}

export const Svg = (props: SvgProps) => {
  const { name } = props;
  if (name === "close")
    return (
      <svg
        className="ui-icon"
        xmlns="http://www.w3.org/2000/svg"
        height="15px"
        width="15px"
        fill="rgba(255,255,255,0.851)"
        style={{ cursor: "pointer" }}
      >
        <path d="M0 0h24v24H0V0z" fill="transparent" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      </svg>
    );
};
