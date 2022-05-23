import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArtistById, resetArtistListById } from "../../store/artist/action";

import defautlAvatar from "../../assets/img/defaultAvatar.png";
import Loading from "../Loading";

export default function TrackArtistImgae({ artistId }) {
  const [artistInfo, setArtistInfo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetArtistListById());
    dispatch(getArtistById(artistId)).then((res) => setArtistInfo(res.data));

    return () => {
      dispatch(resetArtistListById());
    };
    // eslint-disable-next-line
  }, [artistId]);

  return (
    <>
      {artistInfo ? (
        <div className="track__image-wrapper">
          <img
            src={artistInfo?.images[1]?.url || defautlAvatar}
            alt={artistInfo?.name}
          />
        </div>
      ) : (
        <Loading width="200px" height="100px" />
      )}
    </>
  );
}
