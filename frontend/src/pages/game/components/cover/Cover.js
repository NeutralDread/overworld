import React from "react";
import { LazyImage } from "react-lazy-images";
import "./Cover.css";

export const Cover = ({ imageId }) => {
  const thumb = `https://images.igdb.com/igdb/image/upload/t_cover_small/${imageId}.jpg`;
  const actual = `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
  return (
    <section className="game-cover">
      <LazyImage
        src={actual}
        alt="Game cover"
        placeholder={({ imageProps, ref }) => (
          <img
            alt="Loading backdrop..."
            {...imageProps}
            ref={ref}
            className="ui rounded image cover placeholder"
            src={thumb}
          />
        )}
        actual={({ imageProps }) => (
          <img
            alt="Game backdrop"
            className="ui rounded image cover"
            {...imageProps}
          />
        )}
      />
    </section>
  );
};
