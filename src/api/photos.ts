import { fetchImagesURL } from "../constants";
import { IPhoto, IResponseBunchData } from "../types";

export const getBunchPhotos = async (
  offset: number,
  limit: number
): Promise<IPhoto[] | null> => {
  const response = await fetch(
    `${fetchImagesURL}?offset=${offset}&limit=${limit}`
  );
  if (response.ok) {
    const data = (await response.json()) as IResponseBunchData;
    if (data.success) return data.photos;
  }
  return null;
};
