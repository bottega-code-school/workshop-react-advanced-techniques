import * as React from "react";
import ReactPlayer from "react-player";
import playlistData from "../playlistData";

const playIcon = require("../../static/assets/images/play.png");

type MediaType = {
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
  id: string;
  description: string;
};

export default function VideoPlaylist() {
  const media: MediaType[] = playlistData;
  const [videoConfig, setVideoConfig] = React.useState<{
    playing: boolean;
    activeVideo?: MediaType;
  }>({ playing: false });

  React.useEffect(() => {
    setVideoConfig({
      playing: false,
      activeVideo: media[0],
    });

    return () => {
      setVideoConfig({
        playing: false,
      });
    };
  }, []);

  const sizes = {
    width: "780px",
    height: "439px",
  };

  return (
    <div className="playlist">
      <div className="playlist-title">React Playlist</div>

      <div className="playlist-media-container">
        <div className="playlist-media-player">
          {videoConfig?.activeVideo && (
            <ReactPlayer
              url={videoConfig.activeVideo.videoSrc}
              playing={videoConfig?.playing}
              playIcon={
                <a
                  onClick={() =>
                    setVideoConfig({ ...videoConfig, playing: true })
                  }
                  style={{
                    height: sizes.height,
                    width: sizes.width,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                  className="playlist-placeholder-container"
                >
                  <img src={playIcon} className="playlist-play-icon" />
                </a>
              }
              controls
              width={sizes.width}
              height={sizes.height}
              playsinline
              pip
              light={
                videoConfig?.playing
                  ? undefined
                  : videoConfig?.activeVideo?.thumbnailSrc
              }
            />
          )}

          <div className="playlist-media-content">
            <div className="playlist-media-title">
              {videoConfig?.activeVideo?.title}
            </div>

            <div className="playlist-media-description">
              {videoConfig?.activeVideo?.description}
            </div>
          </div>
        </div>

        <div className="playlist-list">
          {media?.map((item) => (
            <a
              onClick={() =>
                setVideoConfig({ playing: true, activeVideo: item })
              }
              className="playlist-item"
              key={item.id}
            >
              <img className="thumb" src={item.thumbnailSrc} />

              <div className="playlist-content">
                <div className="playlist-content-title">{item.title}</div>

                {videoConfig?.activeVideo?.id === item.id &&
                  videoConfig?.playing && (
                    <div className="playlist-content-status">PLAYING</div>
                  )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
