import "./artists.css";
import { useSelector } from "react-redux";

import defaultAvatar from "../../assets/img/defaultAvatar.png";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import ArtistItem from "./AtistItem";

export default function Artists({ title = "Artist" }) {
  const navigate = useNavigate();
  const artists = useSelector((state) => state.Artists.artists.artists);
  const artistsSlice =
    artists?.items.length > 8 ? artists?.items.slice(0, 8) : artists?.items;

  function handleClickOnArtist(artist) {
    navigate("/search/top-track", { state: artist });
  }

  return (
    <div className="row overflow-hidden">
      <div className="artist__header">
        <p>{title}</p>
        {/* <p>
          <Link
            to="/search/relative-artist"
            style={{ color: "white", textDecoration: "none" }}
          >
            See all
          </Link>
        </p> */}
      </div>

      {artistsSlice && artistsSlice.length >= 0 ? (
        artistsSlice.map((artist, index) => {
          let genreArr =
            artist.genres.length >= 5
              ? artist.genres.slice(0, 5)
              : artist.genres;
          return (
            <ArtistItem
              handleClick={handleClickOnArtist}
              artist={artist}
              genreArr={genreArr}
              key={index}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
