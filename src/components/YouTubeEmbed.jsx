import React from "react";
import styles from "./YouTubeEmbed.module.css";

const aspectRatio = 16 / 9;

export function YouTubeEmbed({ embedId, width = 560 }) {
  return (
    <div className="video-responsive">
      <iframe
        width={`${width}`}
        height={`${width / aspectRatio}`}
        src={`https://www.youtube.com/embed/${embedId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
