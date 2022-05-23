import "react-spotify-auth/dist/index.css";
import "animate.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// import Cookies from "js-cookie";
// import { SpotifyApiContext } from "react-spotify-api";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import Background from "./components/Background";
import Dashboard from "./pages/Dashboard";

import Homepage from "./pages/Homepage";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("spotifyAuthToken"));

  useEffect(() => {
    if (token) {
      setToken(localStorage.getItem("spotifyAuthToken"));
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Background />

      {token ? (
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search/*" element={<Dashboard />} />
          </Routes>
        </div>
      ) : (
        <div className="login">
          <SpotifyAuth
            redirectUri="https://hd-spotify-app-search.vercel.app"
            clientID="b64778bc8ee1462da13c211c2acb98a9"
            scopes={[Scopes.userReadPrivate, "user-read-email"]}
            onAccessToken={(token) => setToken(token)}
            localStorage={true}
            noCookie={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
