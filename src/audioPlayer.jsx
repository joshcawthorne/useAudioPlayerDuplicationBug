import React from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { useStoreState } from "easy-peasy";

function AudioPlayer({ url }) {
  const playerUrl = useStoreState((state) => state.player.url);

  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: playerUrl,
    format: "mp3",
    autoplay: true,
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
}

export default AudioPlayer;
