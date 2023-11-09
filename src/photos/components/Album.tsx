import { useMemo } from "react";
import { Dropzone } from "./Dropzone";
import { usePhotos } from "./PhotoProvider";

export const Album = () => {
  const { photos, selected } = usePhotos();
  const selectedPhotos = useMemo(
    () => selected.map((item) => photos.find((photo) => photo.id === item)),
    [selected]
  );

  return (
    <div className="album">
      <h3>Album Generator</h3>
      <div className="album-content">
        <Dropzone />
        <ol>
          {selectedPhotos.map(
            (selectedPhoto, index) =>
              selectedPhoto && <li key={index}>{selectedPhoto.title}</li>
          )}
        </ol>
      </div>
    </div>
  );
};
