import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Tracks from "../../components/Tracks";
import { getTopTrackAction } from "../../store/track/action";

export default function TopTrack() {
  const dispatch = useDispatch();
  const location = useLocation();

  const topTrack = useSelector((state) => state.Tracks.topTrack);
  const isTopTrackPage = location.pathname.indexOf("/top-track") >= 0;

  const artist = location.state;
  const artistId = artist.id;

  useEffect(() => {
    dispatch(getTopTrackAction(artistId));
  }, []);

  return (
    <div className="animate__animated animate__bounceIn">
      <div
        className="container px-4 dashboard-content mt-5"
        style={{ marginTop: "50px !important" }}
      >
        <Tracks
          title="Top song of"
          subTitle={artist.name}
          diffPage={isTopTrackPage}
          topTrack={topTrack}
        />
      </div>
    </div>
  );
}
