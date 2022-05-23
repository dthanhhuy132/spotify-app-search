import Artists from "../../components/Artists";
import Tracks from "../../components/Tracks";

export default function SearchPage() {
  return (
    <div className="container px-4 dashboard-content">
      <Artists />
      <Tracks />
    </div>
  );
}
