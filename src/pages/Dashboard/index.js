import "./dashboard.css";

import { useSelector } from "react-redux";
import Artists from "../../components/Artists";
import Header from "../../components/Header";
import Tracks from "../../components/Tracks";

export default function Dashboard() {
  const tracks = useSelector((state) => {
    // console.log("state", state);
  });
  return (
    <div className="dashboard">
      <Header />
      <Tracks />
      <Artists />
    </div>
  );
}
