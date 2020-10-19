import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  // const[token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token)
    {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    console.log(token);
  }, []);
  
  console.log(user);
  return (
    <div className="App">
      {
        token ? (
          <Player sotify = { spotify }/>
        ) : (
          <Login />
        )
      }
      {/* <h1> We are building a spotify clone app </h1> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
