import getDataFail from "../../components/ultil/FetchDataFail";
import artistApi from "../../service/artistApi";

export const GET_ARTIST = "GET_ARTIST";
export const GET_ARTIST_BY_ID = "GET_ARTIST_BY_ID";
export const RESET_ARTIST_ID = "RESET_ARTIST_ID";

export function getArtistAsync(searchString) {
  return async (dispatch) => {
    try {
      const res = await artistApi.getAll(searchString);
      dispatch({
        type: GET_ARTIST,
        payload: {
          data: res.data,
          searchValue: searchString,
        },
      });
    } catch (error) {
      getDataFail();
    }
  };
}

export function getArtistById(id) {
  return async (dispatch) => {
    try {
      const res = await artistApi.getArtistById(id);
      dispatch({
        type: GET_ARTIST_BY_ID,
        payload: res.data,
      });

      return {
        data: res.data,
      };
    } catch (error) {
      getDataFail();
    }
  };
}

export function resetArtistListById() {
  return {
    type: RESET_ARTIST_ID,
  };
}
