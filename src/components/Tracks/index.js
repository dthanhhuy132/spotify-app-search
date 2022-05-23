import "./tracks.css";
import { useSelector } from "react-redux";
import TrackArtistImgae from "./TrackArtistInfo";
import Loading from "../Loading";

export default function Tracks({
  title = "Related song",
  subTitle = "",
  diffPage = false,
  topTrack,
}) {
  const tracks = useSelector((state) => state.Tracks.tracks.tracks);

  const tracksSlice = diffPage
    ? topTrack.tracks
    : tracks?.items.length > 8
    ? tracks?.items.slice(0, 8)
    : tracks?.items;

  return (
    <div className="row overflow-hidden">
      <div
        className={`track__header ${diffPage && "track__header--diff-page"}`}
      >
        <p>
          {title}
          <span className="track__header-subtile">{subTitle}</span>
        </p>
        <p></p>
      </div>
      {tracksSlice && tracksSlice.length >= 0 ? (
        tracksSlice.map((track, index) => {
          return (
            <div className="col col-6 gx-5 mb-3" key={index}>
              <div className="track__container">
                <div className="track__content">
                  <TrackArtistImgae artistId={track.artists[0].id} />

                  <div className="track__content-song">
                    <div className="track__content-text">
                      <p className="track__content-trackName">{track?.name}</p>
                      <p className="track__content-artistName">
                        {track?.artists[0].name}
                      </p>
                    </div>
                    <audio controls src={track.preview_url}></audio>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
