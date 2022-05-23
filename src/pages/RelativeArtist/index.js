import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Artists from "../../components/Artists";
import ArtistItem from "../../components/Artists/AtistItem";
import Loading from "../../components/Loading";

export default function RelativeArtist() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isArtistPage = location.pathname.indexOf("relative-artist") >= 0;

  const initData = useSelector((state) => state.Artists);

  console.log(initData);

  const artistList = initData?.artists?.artists.items;
  const artistSearchValue = initData?.searchValue;
  const artistListTotal = initData?.totalArtist;

  console.log(
    "initData trong relative-artitst",
    artistSearchValue,
    artistListTotal,
    artistList
  );

  function handleClickOnArtist(artist) {
    navigate("/search/top-track", { state: artist });
  }

  return (
    <div className="row overflow-hidden">
      <div className="artist__header">
        <p>Relative artists</p>
      </div>

      {artistList && artistList.length >= 0 ? (
        artistList.map((artist, index) => {
          let genreArr =
            artist.genres.length >= 5
              ? artist.genres.slice(0, 5)
              : artist.genres;
          return (
            <p>chua co gi</p>
            // <ArtistItem
            //   key={index}
            //   artist={artist}
            //   genreArr={genreArr}
            //   handleClick={handleClickOnArtist}
            // />
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
