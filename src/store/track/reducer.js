import { GET_TOP_TRACK, GET_TRACK, RESET_TRACK } from "./action";

const initState = {
  tracks: [],
  topTrack: [],
};

export default function TrackReducer(state = initState, action) {
  switch (action.type) {
    case GET_TRACK:
      return {
        ...state,
        tracks: action.payload,
      };

    case RESET_TRACK: {
      return {
        ...state,
        tracks: [],
      };
    }

    case GET_TOP_TRACK:
      return {
        ...state,
        topTrack: action.payload,
      };

    default:
      return state;
  }
}
