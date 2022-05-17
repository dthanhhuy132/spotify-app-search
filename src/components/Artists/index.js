import { useSelector } from "react-redux";

export default function Artists() {
  const artists = useSelector((state) => state.Artists.artists.artists);
  console.log("artists trong artists", artists);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-4">
          <div>Artists</div>
        </div>
      </div>
    </div>
  );
}
