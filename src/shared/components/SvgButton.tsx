import { Svg } from "./Svg";

interface SvgButtonProps {
  svg: string;
  onClick: () => void;
}

export const SvgButton = (props: SvgButtonProps) => {
  const { svg, onClick } = props;
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className="btn-svg" onClick={onClickHandler}>
      <Svg name={svg} />
    </div>
  );
};
