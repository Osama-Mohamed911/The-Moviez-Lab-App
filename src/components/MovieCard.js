/* eslint-disable jsx-a11y/anchor-is-valid */
import PaginateBar from "./Paginate";
import { Link } from "react-router-dom";
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionType"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import VideoSection from "./VideoSection";
function MovieCard({movies , search , getPage ,getSomeMovies}) {
    const notify = () => toast.success(' Added to WatchList!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    //custom hook 
    const MovieContext = useMovieContext();
    // disable daplicate movie in watch list
    const storedMovie = MovieContext.watchlist.find(
        (o)=> o.id === movies.id
    );
    const watchListDisabled = storedMovie ? true : false;
    // search function
    const onSearch = (word)=>{
        search(word)
    }
    const onClickMove = (f)=>{
        getSomeMovies(f)
    }
    return (  
        
        <>
        <VideoSection/>
        <section className="allmovies" id="movies" >
        <div className="container">
            <div className="link-holder">
            <div className="row">
                <div className="col-lg-8">
                    <ul>
                        <li  className="btnl"onClick={()=>{onClickMove("popular")} }>Trending</li>
                        <li className="btnl"onClick={()=>{onClickMove("top_rated")}}>Top Rated</li>
                        <li className="btnl"onClick={()=>{onClickMove("now_playing")}}>popular</li>
                        <li className="btnl"onClick={()=>{onClickMove("upcoming")}}>Up Coming</li>
                    </ul>
                    <ToastContainer 
                    position="top-center"
                    autoClose={1000}
                    limit={1}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="colored"/>
                </div>
                <div className="col-lg-4">
                    <form className="d-flex " role="search">
                        <input onChange={(e)=> onSearch(e.target.value)} className="form-control me-2" type="search" placeholder="Get Movies By Word..." aria-label="Search"/>
                      </form>
                </div>
        </div>
        </div>
            <div className="row">
                
                
                {
                        movies.length >=1 ? (
                            movies.map((movie)=>{
                                return(
                                    <div className="col-lg-3">
                                        <button className="notify" onClick={()=>{notify()}}>
                                         <button className="btn click"  onClick={()=> MovieContext.moviesDispatch(
                                            {type: actions.ADD_MOVIE_TO_WATCHLIST , payload: movie}
                                        )} disabled={watchListDisabled}><i class="fa-solid fa-bookmark"></i></button>
                                        </button>
                                        <Link to={`/movie/${movie.id}`} className="text-center">
                                    <div className="movie" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="movie" className="img-fluid"/>
                                    <div className="movie-info  text-white">
                                    <div className="title py-3 text-center ">
                                                <h3>{movie.title}</h3>
                                                </div>
                                        <div className="container d-flex justify-content-between pt-2 ">
                                           
                                            <p className="p-title"><i class="fa-solid fa-clock"></i><span>{movie.release_date}</span></p>
                                            
                                        
                                        <p><i className="fa-solid fa-star"><span>{movie.vote_average}</span></i></p>
                                    </div>
                                    </div>
                                </div>
                                </Link>
                                </div>
                                )
                            })
                        ) :<div className="py-5"><i class="fa-solid fa-magnifying-glass d-block text-center text-white fs-5" ></i><h2 className="text-white text-center pt-4">No Result Found ...</h2></div>

                    }
                
            </div>
        </div>
    </section>
    {movies.length >=1 ? (<PaginateBar getPage={getPage} />) : null}
    
    </>
    );
}

export default MovieCard;