import { useEffect, useReducer } from "react";
import { IPhoto, PhotoAction } from "../types";
import { getBunchPhotos } from "../api/photos";

interface PhotoState {
  photos: IPhoto[];
  selected: number[];
  initialized: boolean;
}

export function usePhotoReducer(): [PhotoState, React.Dispatch<PhotoAction>] {
  const photoReducer = (state: PhotoState, action: PhotoAction): PhotoState => {
    switch (action.type) {
      case "fetch":
        return {
          initialized: true,
          photos: [...action.payload.data],
          selected: state.selected,
        };
      case "select":
        return {
          ...state,
          selected: [...state.selected, action.payload.photoId],
        };
      case "deselect":
        return {
          ...state,
          selected: [
            ...state.selected.slice(0, action.payload.index),
            ...state.selected.slice(action.payload.index + 1),
          ],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(photoReducer, {
    photos: [],
    selected: [],
    initialized: false,
  });

  const fetchData = async () => {
    const data = await getBunchPhotos(0, 100);
    if (data !== null) {
      dispatch({ type: "fetch", payload: { data } });
    }
  };

  useEffect(() => {
    fetchData();
  });

  return [state, dispatch];
}
