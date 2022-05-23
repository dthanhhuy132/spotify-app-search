import "./artists.css";

import defaultAvatar from "../../assets/img/defaultAvatar.png";

export default function ArtistItem({ artist, genreArr, handleClick }) {
  return (
    <div className="col col-3 mb-4">
      <div className="artist" onClick={() => handleClick(artist)}>
        <div className="artist__infomation">
          <p className="artist__name">{artist.name}</p>
          <div className="artist__genres">
            {genreArr.map((genre, index) => (
              <span key={index} className="artist__genre-item">
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className="artist_image">
          <img src={artist?.images[1]?.url || defaultAvatar} />
        </div>
      </div>
    </div>
  );
}
