import { useMovieContext } from "./context/GlobalContext";
import WatchMovie from "./WatchMovie";
import {BsBookmarkPlus} from "react-icons/bs"
function WatchListt() {
    const MovieContext = useMovieContext();
    return ( 
        <div className="watchlist">
            < div className="container">
                <div className="heading">
                    <h1>My Watchlist </h1>
                    <span className="count">
                        {MovieContext.watchlist.length}
                        
                        {MovieContext.watchlist.length === 1 ? " Movie" : " Movies"}
                    </span>
                </div>
                        
                {MovieContext.watchlist.length > 0 ?(<div className="row">
                    {
                        MovieContext.watchlist.map((movie)=>(
                            <div className="col-md-3">
                            <WatchMovie key={movie.id} movie={movie}/>
                            </div>
                        ))
                    }
                </div>):<div className="add-some"> <BsBookmarkPlus style={{fontSize:"40px" , color:"red", marginBottom:"30px"}}/> <h2 className="no-movie">No Movies in your List , add some !</h2></div>}
            </div>
        </div>
     );
}

export default WatchListt;