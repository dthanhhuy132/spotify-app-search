import "./dashboard.css";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Header from "../../components/Header";

import SearchPage from "../SearchPage";
import TopTrack from "../TopTrack";
import RelativeArtist from "../RelativeArtist";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="top-track" element={<TopTrack />} />
        {/* <Route path="relative-artist" element={<RelativeArtist />} /> */}
      </Routes>
      <ToastContainer theme="dark" style={{ fontSize: "1.4rem" }} />
    </div>
  );
}
