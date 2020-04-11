import React from "react";
import "./App.css";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "./audioPlayer";

import { createStore, StoreProvider, action } from "easy-peasy";
import UpdateURL from "./updateUrl";

function App() {
  const store = createStore({
    player: {
      url: null,
      volume: 1,
      duration: 0,
      updateUrl: action((state, payload) => {
        state.url = payload;
      }),
      updateVolume: action((state, payload) => {
        state.volume = payload;
      }),
      updateDuration: action((state, payload) => {
        state.duration = payload;
      }),
    },
  });

  return (
    <StoreProvider store={store}>
      <AudioPlayerProvider>
        <UpdateURL />
        <AudioPlayer />
      </AudioPlayerProvider>
    </StoreProvider>
  );
}

export default App;
