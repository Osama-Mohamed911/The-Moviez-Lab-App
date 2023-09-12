/* eslint-disable jsx-a11y/anchor-is-valid */
import Slider from "react-slick";
import landing from '../img/329583.jpg'
import landing2 from '../img/wallpaperflare.com_wallpaper.jpg'
import landing3 from '../img/john.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade} from "react-awesome-reveal";
function Landing() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnHover:false,
        

      };

    return ( 
        <>
        <Slider {...settings}>
            
        <div>
            
        <section className="landing " style={{backgroundImage:`url(${landing})`}}>
        <div className="overlay1"></div>
        <div className="container">
            
            <div className="row">
                <div className="col-lg-8">
                    <Fade direction={'down'} duration={1000} >
                    <h1>Avengers: Endgame</h1>
                    </Fade>
                    <Fade direction={'right'} duration={1000} delay={500}>
                    <ul>
                        <li> Adventure</li>
                        <li>Action</li>
                        <li>Drama</li>
                        <li>Duration : 3h 1m</li>
                    </ul>
                    </Fade>
                    <Fade direction={'up'} duration={1000} delay={800}>
                    <div className="buttons">
                        <a href="" className="main-btn me-3">Watch Movie</a>
                        <a href="" className="second-btn">View Info</a>
                    </div>
                    </Fade>
                </div>
            </div>
            
        </div>
      </section>      </div>
      <div>
      <section className="landing " style={{backgroundImage:`url(${landing2})`}}>
        <div className="overlay1"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <Fade direction={'down'} duration={1000} >
                    <h1>Avatar: The Way of Water</h1>
                    </Fade>
                    <Fade direction={'right'} duration={1000} delay={500}>
                    <ul>
                        <li>Action</li>
                        <li> Adventure</li>
                        <li>Fantasy</li>
                        <li>Duration : 3h 12m</li>
                    </ul>
                    </Fade>
                    <Fade direction={'up'} duration={1000} delay={800}>
                    <div className="buttons">
                        <a href="" className="main-btn me-3">Watch Movie</a>
                        <a href="" className="second-btn">View Info</a>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
      </section>
      </div>
      <div>
      <section className="landing " style={{backgroundImage:`url(${landing3})`}}>
        <div className="overlay1"></div>
        <div className="container">
        
            <div className="row">
                <div className="col-lg-8">
                <Fade direction={'down'} duration={1000} >
                    <h1>John Wick: Chapter 4</h1>
                    </Fade>
                    <Fade direction={'right'} duration={1000} delay={500}>
                    <ul>
                        <li> Action</li>
                        <li>Crime</li>
                        <li>Thriller</li>
                        <li>Duration : 2h 49m</li>
                    </ul>
                    </Fade>
                    <Fade direction={'up'} duration={1000} delay={800}>
                    <div className="buttons">
                        <a href="" className="main-btn me-3">Watch Movie</a>
                        <a href="" className="second-btn">View Info</a>
                    </div>
                    </Fade>
                </div>
            </div>

        </div>
      </section>
      </div>
        </Slider>
      </>
     );
}

export default Landing;