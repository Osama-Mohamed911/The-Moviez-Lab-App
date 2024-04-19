import React from "react";
import vedio from "../img/home_hero_background - Trim.mp4";
import { BsFillPlayCircleFill } from "react-icons/bs";

const VideoSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="overlay2"></div>
        <video autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
        </video>

        <h1>
          Enjoy your Movie <BsFillPlayCircleFill style={{ color: "red" }} />
        </h1>
      </section>
    </>
  );
};

export default VideoSection;
