import React, { ReactNode, useContext } from "react";
import { usePhotoReducer } from "../usePhotoReducer";
import { IPhoto, PhotoAction } from "../../types";

interface Props {
  children?: ReactNode;
}

type PhotoContextType = {
  photos: IPhoto[];
  selected: number[];
  photoDispatch: React.Dispatch<PhotoAction>;
};

export const PhotoContext = React.createContext<PhotoContextType | undefined>(
  undefined
);

export const PhotoProvider: React.FC<Props> = ({ children }) => {
  const [{ photos, selected, initialized }, photoDispatch] = usePhotoReducer();
  return (
    <PhotoContext.Provider value={{ photos, selected, photoDispatch }}>
      {initialized ? children : <div>Loading...</div>}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const photoCtx = useContext(PhotoContext);
  if (!photoCtx) {
    throw new Error("Component beyond PhotoContext!");
  }
  return photoCtx;
};
