import React from "react";
import "./Popular.css";

export const Popular = ({ isLoading, popular }) => (
  <section className="popular margin-top-xs margin-bottom">
    {!isLoading ? (
      <React.Fragment>
        {popular.map((p, i) => {
          return (
            <div key={p.id} className="cover-wrapper">
              <img
                className="cover"
                alt={p.name}
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${
                  p.cover.image_id
                }.jpg`}
              />
              <div key={i} className="cover-overlay">
                <strong>{p.name}</strong>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="placeholder" />
        ))}
      </React.Fragment>
    )}
  </section>
);
