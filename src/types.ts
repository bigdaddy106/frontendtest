export interface IPhoto {
  id: number;
  url: string;
  title: string;
  description: string;
  user: number;
}

export interface IResponseBunchData {
  success: boolean;
  total_photots: number;
  message: string;
  offest: number;
  limit: number;
  photos: IPhoto[];
}

export interface PhotoFetchAction {
  type: "fetch";
  payload: {
    data: IPhoto[];
  };
}

export interface PhotoSelectAction {
  type: "select";
  payload: {
    photoId: number;
  };
}

export interface PhotoDeselectAction {
  type: "deselect";
  payload: {
    index: number;
  };
}

export type PhotoAction =
  | PhotoFetchAction
  | PhotoSelectAction
  | PhotoDeselectAction;
