import { DragEvent, useMemo } from "react";
import { usePhotos } from "./PhotoProvider";
import { Card } from "./Card";

export const Dropzone = () => {
  const { photos, selected, photoDispatch } = usePhotos();
  const selectedPhotos = useMemo(
    () => selected.map((item) => photos.find((photo) => photo.id === item)),
    [selected]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const photoId = parseInt(event.dataTransfer.getData("text"));
    photoDispatch({ type: "select", payload: { photoId } });
  };
  const deSelect = (index: number) => {
    photoDispatch({ type: "deselect", payload: { index } });
  };

  return (
    <div className="dropzone" onDrop={onDrop} onDragOver={allowDrop}>
      {selectedPhotos.map(
        (item, i) =>
          item && (
            <Card
              key={i}
              url={item.url}
              alt={item.title}
              onClose={() => deSelect(i)}
            />
          )
      )}
    </div>
  );
};
