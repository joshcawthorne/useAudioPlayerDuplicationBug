import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const playbackItemsArray = [
  {
    title: "Track 1",
    url: "https://storage.googleapis.com/media-session/sintel/snow-fight.mp3",
  },
  {
    title: "Track 2",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
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

function UpdateURL() {
  const updateUrl = useStoreActions((actions) => actions.player.updateUrl);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      {playbackItemsArray.map((item, index) => (
        <div onClick={() => updateUrl(item.url)}>{item.title}</div>
      ))}
    </div>
  );
}

export default UpdateURL;
