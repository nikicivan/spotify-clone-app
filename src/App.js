import React, { useEffect } from 'react';

import './App.css';
import Login from './pages/login/Login';
import { getTokenFromUrl } from './spotify';
import Player from './pages/player/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateProviderValue } from './contextAPI/stateProvider'; 

const spotify = new SpotifyWebApi();

function App() {  
  const [{ user, token }, dispatch] = useStateProviderValue();

  //run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DX4wta20PHgwo').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
    // eslint-disable-next-line    
  }, []);

  return (
    <div className="app">    
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )
    }  
    </div>
  );
}

export default App;
