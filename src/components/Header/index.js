import "./header.css";

import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../Logo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArtistAsync, resetArtistListById } from "../../store/artist/action";
import { getTrackAsync, resetTrack } from "../../store/track/action";

export default function Header() {
  const location = useLocation();
  const initSearchString = queryString.parse(location.search).q;

  const [searchString, setSearchString] = useState(initSearchString);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchString) {
      navigate(`/search?q=${searchString}`);
    } else {
      return;
    }
  }

  useEffect(() => {
    if (searchString === "") {
      setSearchString("");
      navigate(`/search`);
    }
    // eslint-disable-next-line
  }, [searchString]);

  useEffect(() => {
    if (initSearchString) {
      dispatch(resetTrack());
      dispatch(resetArtistListById());
      dispatch(getArtistAsync(initSearchString));
      dispatch(getTrackAsync(initSearchString));
    }
    // eslint-disable-next-line
  }, [initSearchString]);

  useEffect(() => {
    if (location.pathname.indexOf("top-track") >= 0) setSearchString("");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="header ">
      <Logo />
      <div className="header__search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="header__search-input"
            placeholder="Search track or artist"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </form>

        <i className="fa-solid fa-magnifying-glass header__search-icon"></i>
      </div>
    </div>
  );
}
