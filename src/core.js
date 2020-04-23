import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import AudioPlayer from "./audioPlayer";
import UpdateURL from "./updateUrl";
import useSystemTheme from "react-use-system-theme";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { createStore, StoreProvider, action, useStoreState } from "easy-peasy";
import { useState } from "react";
import { useEffect } from "react";

function Core() {
  const themeSetting = useStoreState((store) => store.settings.theme);
  const systemTheme = useSystemTheme();
  const forcedTheme = useStoreState((store) => store.settings.forcedTheme);
  let themeObj = themeSetting;

  useEffect(() => {
    if (forcedTheme) {
      themeObj = themeSetting;
    } else {
      themeObj = theme[systemTheme || "dark"];
    }
  });
  return (
    <ThemeProvider
      theme={forcedTheme ? themeSetting : theme[systemTheme || "dark"]}
    >
      <AudioPlayerProvider>
        <UpdateURL />
        <AudioPlayer />
      </AudioPlayerProvider>
    </ThemeProvider>
  );
}

export default Core;
