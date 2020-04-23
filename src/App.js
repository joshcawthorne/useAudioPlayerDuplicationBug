import React from "react";
import "./App.css";
import { theme } from "./theme";
import { createStore, StoreProvider, action, useStoreState } from "easy-peasy";
import UpdateURL from "./updateUrl";
import Core from "./core";
import useDarkMode from "use-dark-mode";

function App() {
  const store = createStore({
    player: {
      url: null,
      volume: 1,
      duration: 0,
      randomInt: 0,
      randomString: "hi",
      updateInt: action((state, payload) => {
        state.randomInt = payload;
      }),
      updateString: action((state, payload) => {
        state.randomString = payload;
      }),
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
    settings: {
      theme: theme["dark"],
      forcedTheme: false,
      updateTheme: action((state, payload) => {
        state.theme = payload;
      }),
    },
  });

  return (
    <StoreProvider store={store}>
      <Core />
    </StoreProvider>
  );
}

export default App;
