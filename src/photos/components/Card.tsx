import { SvgButton } from "../../shared/components/SvgButton";

interface CardProps {
  url: string;
  alt: string;
  onClose: () => void;
}

export const Card = (props: CardProps) => {
  const { url, alt, onClose } = props;

  return (
    <div className="card">
      <div className="card-layer">
        <img
          height="100%"
          src={url}
          alt={`preview: ${alt}`}
          style={{ borderRadius: 0 }}
        />
      </div>
      <div className="card-ui-layer">
        <div className="card-ui-header">
          <SvgButton svg="close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
