import getDataFail from "../../components/ultil/FetchDataFail";
import trackApi from "../../service/trackApi";

export const GET_TRACK = "GET_TRACK";
export const GET_TOP_TRACK = "GET_TOP_TRACK";
export const RESET_TRACK = "RESET_TRACK";

function getTrack(tracks) {
  return {
    type: GET_TRACK,
    payload: tracks,
  };
}

export function getTrackAsync(searchString) {
  return async (dispatch) => {
    try {
      const res = await trackApi.getAll(searchString);
      dispatch(getTrack(res.data));
    } catch (error) {
      getDataFail();
    }
  };
}

export function resetTrack() {
  return {
    type: RESET_TRACK,
    payload: "",
  };
}

export function getTopTrackAction(artistId) {
  return async (dispatch) => {
    try {
      const res = await trackApi.getTopTrack(artistId);
      dispatch({
        type: GET_TOP_TRACK,
        payload: res.data,
      });
    } catch (error) {
      getDataFail();
    }
  };
}
