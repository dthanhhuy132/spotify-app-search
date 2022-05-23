import axiosClient from "./axiosClient";

const artistApi = {
  getAll(searchValue, restParams) {
    const params = {
      q: searchValue,
      type: "artist",
      ...restParams,
    };
    return axiosClient.get("/v1/search", {
      params,
    });
  },

  getArtistById(id) {
    return axiosClient.get(`/v1/artists/${id}`);
  },
};

export default artistApi;
