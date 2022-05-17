import { useSelector } from "react-redux";

export default function Tracks() {
  const tracks = useSelector((state) => state.Tracks.tracks.tracks);
  console.log("tracks trong tracks", tracks);
  const tracksLimit = tracks?.limit;

  const tracksSlice =
    tracks?.items.length > 8 ? tracks?.items.slice(0, 8) : tracks?.items;

  console.log("tracksSlice trong tracks", tracksSlice);

  return (
    <div className="container">
      <div className="row">
        {tracksSlice ? (
          tracksSlice.map((track) => {
            console.log(track);

            return (
              <div className="col col-6">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>Ten bai hat</p>
                  <p>Ten tac gia</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Deu co ket qua nao</p>
        )}
      </div>
    </div>
  );
}
