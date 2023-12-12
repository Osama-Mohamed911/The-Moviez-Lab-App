/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Overview() {
  // get id
  const param = useParams();
  // setinfo
  const [info, setInfo] = useState([]);
  const backImg = "https://image.tmdb.org/t/p/w500" + info.backdrop_path;

  // get all movies Info
  const getInfo = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=c3d3bd2fbe00199ea04dcf06269a4e62&language=en-US`
    );
    setInfo(res.data);
  };
  useEffect(() => {
    getInfo();
  });
  console.log(info.genres);
  return (
    <section
      className="overview"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={`https://image.tmdb.org/t/p/w500` + info.poster_path}
              alt="movie"
              className="img-fluid mb-4"
              width="300px"
              height="400px"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-white">{info.title}</h1>
            <h3>{info.tagline}</h3>
            <ul className="d-flex">
              {info && info.genres
                ? info.genres.map((g) => (
                    <>
                      {" "}
                      <li id={g.id}>{g.name}</li>
                    </>
                  ))
                : ""}
            </ul>
            <h2>Overview</h2>
            <p>{info.overview}</p>
            <div className="language">
              <p>
                <i className="fa-solid fa-earth-americas"></i>{" "}
                <span>English</span>
              </p>
              <p>
                <i class="fa-regular fa-clock"></i>
                <span>{info.release_date}</span>
              </p>
            </div>
            <div className="botns d-flex  pt-3">
              <a
                href={info.homepage}
                target="_blank"
                className="second-btn me-2"
                rel="noreferrer"
              >
                <i className="fa-solid fa-play"></i> Play Movie
              </a>

              <Link to="/movie" className="main-btn">
                <i class="fa-solid fa-arrow-left-long me-2"></i> Back To Movies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
