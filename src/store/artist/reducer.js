import { GET_ARTIST, GET_ARTIST_BY_ID, RESET_ARTIST_ID } from "./action";

const initState = {
  artists: [],
  totalArtist: 0,
  searchValue: null,
  artistById: [],
};

export default function ArtistReducer(state = initState, action) {
  switch (action.type) {
    case GET_ARTIST:
      // console.log("action.oayload", action.payload);
      return {
        ...state,
        artists: action.payload.data,
        totalArtist: action.payload.data.artists.total,
        searchValue: action.payload.searchValue,
      };

    case GET_ARTIST_BY_ID:
      let newArtistById = [...state.artistById];
      newArtistById.push(action.payload);
      return {
        ...state,
        artistById: newArtistById,
      };

    case RESET_ARTIST_ID:
      return {
        ...state,
        artistById: [],
      };

    default:
      return state;
  }
}
