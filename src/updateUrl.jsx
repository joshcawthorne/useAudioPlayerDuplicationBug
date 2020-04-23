import React, { useState } from "react";

import styled from "styled-components/macro";
import { useStoreState, useStoreActions } from "easy-peasy";

const PlaybackItems = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.colors.text};
`;

const PlaybackItem = styled.div`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  height: 50px;
  width: 200px;
  cursor: pointer;
  user-select: none;
`;

const playbackItemsArray = [
  {
    title: "Track 1",
    url: "https://storage.googleapis.com/media-session/sintel/snow-fight.mp3",
  },
  {
    title: "Track 2",
    url:
      "http://hwcdn.libsyn.com/p/5/f/d/5fd53827332d6803/p1462.mp3?c_id=70803698&cs_id=70803698&expiration=1587691222&hwt=5623e18e4869a43d3b0ec37ce564e1fa",
  },
  {
    title: "Track 3",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "Track 4",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Track 5",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    title: "Track 6",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    title: "Track 7",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    title: "Track 8",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    title: "Track 9",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    title: "Track 10",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    title: "Track 11",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
  {
    title: "Track 12",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    title: "Track 13",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
  },
  {
    title: "Track 14",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
  },
  {
    title: "Track 15",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  },
  {
    title: "Track 16",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
  },
];

const light = {
  text: "#000",
};

const dark = {
  text: "#eee",
};

function UpdateURL() {
  const updateUrl = useStoreActions((actions) => actions.player.updateUrl);
  const randomString = useStoreState((store) => store.player.randomString);
  const randomInt = useStoreState((store) => store.player.randomInt);
  const updateRandomString = useStoreActions(
    (actions) => actions.player.updateString
  );
  const updateRandomInt = useStoreActions(
    (actions) => actions.player.updateInt
  );
  const theme = useStoreState((store) => store.settings.theme);
  const updateTheme = useStoreActions(
    (actions) => actions.settings.updateTheme
  );
  const [cooldown, setCooldown] = useState(false);

  function handleUpdateUrl(url) {
    if (!cooldown) {
      setCooldown(true);
      updateUrl(url);
      setTimeout(() => {
        setCooldown(false);
      }, 1750);
    }
  }

  return (
    <div>
      <div>
        {randomString}
        <button onClick={() => updateRandomString("hello")}>
          Update string
        </button>
      </div>
      <div>
        <button onClick={() => updateTheme(theme === light ? dark : light)}>
          Update Theme
        </button>
      </div>
      <div>
        {randomInt}
        <button onClick={() => updateRandomInt(randomInt + 1)}>
          Update string
        </button>
      </div>

      <PlaybackItems>
        {playbackItemsArray.map((item, index) => (
          <PlaybackItem onClick={() => handleUpdateUrl(item.url)}>
            {item.title}
          </PlaybackItem>
        ))}
      </PlaybackItems>
    </div>
  );
}

export default UpdateURL;
