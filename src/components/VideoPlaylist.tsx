import * as React from "react";
import ReactPlayer from "react-player";
import playlistData from "../playlistData";
import { Button } from "./Button";
import Stack from "./dom-elements/Stack";

const playIcon = require("../../static/assets/images/play.png");

type MediaType = {
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
  id: string;
  description: string;
};

type VideoConfigType = {
  playing: boolean;
  activeVideo?: MediaType;
};

export default function VideoPlaylist() {
  const media: MediaType[] = playlistData;
  const [videoConfig, setVideoConfig] = React.useState<VideoConfigType>({
    playing: false,
  });

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

  const renderItem = (item: MediaType) =>
    renderPlaylistListItem({
      item,
      isActive:
        videoConfig?.activeVideo?.id === item.id && videoConfig?.playing,
      onClick: () => setVideoConfig({ playing: true, activeVideo: item }),
    });

  return (
    <div className="playlist">
      <div className="playlist-header">
        <div className="playlist-title">React Playlist</div>
        <Stack direction="row">
          <Button primary>Refresh</Button>
          <Button warning>Delete</Button>
        </Stack>
      </div>

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
          {media?.filter((i) => i.id)?.map(renderItem)}
        </div>
      </div>
    </div>
  );
}

export const renderPlaylistListItem = (args: {
  item: MediaType;
  isActive: boolean;
  onClick: () => void;
}) => {
  try {
    const { item, onClick, isActive } = args;

    console.log("item: ", item);

    return (
      <a onClick={onClick} className="playlist-item" key={item.id}>
        {item.thumbnailSrc && !item.thumbnailSrc.includes("null") && (
          <img className="thumb" src={item.thumbnailSrc} />
        )}

        <div className="playlist-content">
          <div className="playlist-content-title">
            {item.title?.toUpperCase()}
          </div>

          {isActive && <div className="playlist-content-status">PLAYING</div>}
        </div>
      </a>
    );
  } catch (error) {
    console.error("Error in renderPlaylistListItem: ", error);
    return <div />;
  }
};
