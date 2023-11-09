import { usePhotos } from "./PhotoProvider";

export const Gallery = () => {
  const { photos } = usePhotos();
  const onDrag = (event: React.DragEvent<HTMLImageElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  return (
    <div className="gallery">
      <div className="gallery-content">
        {photos.map((photo) => (
          <img
            className="gallery-card"
            loading="lazy"
            id={photo.id + ""}
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            draggable="true"
            onDragStart={onDrag}
          />
        ))}
      </div>
    </div>
  );
};
