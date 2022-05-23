import axiosClient from "./axiosClient";

const trackApi = {
  getAll(searchValue) {
    const params = {
      q: searchValue,
      type: "track",
    };
    return axiosClient.get("/v1/search", {
      params,
    });
  },

  getTopTrack(artistId) {
    return axiosClient.get(`/v1/artists/${artistId}/top-tracks/?market=VN`);
  },
};

export default trackApi;
