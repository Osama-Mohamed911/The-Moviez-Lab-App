
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import axios from "axios";
import Overview from "./components/Overview";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ContextProvider from "./components/context/GlobalContext";
import WatchListt from "./components/WatchListt";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {

  const [movies , setMovies] = useState([]);
  // get all movies with axios
  const getAllMovies = async ()=>{
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c3d3bd2fbe00199ea04dcf06269a4e62&language=en-US");
    setMovies(res.data.results);
  }
  const getSomeMovies = async (film)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${film}?api_key=c3d3bd2fbe00199ea04dcf06269a4e62&language=en-US`);
    setMovies(res.data.results);
  }
  // get currentpage
  const getPage = async (page)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c3d3bd2fbe00199ea04dcf06269a4e62&language=en-US&page=${page}`);
    setMovies(res.data.results);
   
  }
  useEffect(()=>{
    getAllMovies();
  },[])
  // to search in API
  const search = async (word)=>{
    if(word === ''){
      getAllMovies();
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c3d3bd2fbe00199ea04dcf06269a4e62&query=${word}&include_adult=false&language=en-US`);
      setMovies(res.data.results);
    }
    
   
  }

  return (
    <>
      <BrowserRouter>
      <ContextProvider>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<MovieCard movies = {movies} search = {search} getPage = {getPage} getSomeMovies={getSomeMovies} />}/>
        <Route path="/movie/:id" element={<Overview/>}/>
        <Route path="/watchList" element={<WatchListt/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </ContextProvider> 
      </BrowserRouter>
    </>
  );
}

export default App;
