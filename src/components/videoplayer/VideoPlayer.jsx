import { useRef } from "react";
import "./videoplayer.css";
import college_video from "../../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      ref={player}
      className={`video-player ${playState ? "" : "hide"}`}
      onClick={closePlayer}
    >
      <video
        autoPlay
        muted
        controls
        src={college_video}
        type="video/mp4"
      ></video>
    </div>
  );
};

export default VideoPlayer;
