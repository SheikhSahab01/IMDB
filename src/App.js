import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './Pages/homepage/Home';
import Movie from './Pages/moviedetails/Moviesdetails';
import MovieList from './Components/movieList/movieList';
import Demo from './Components/cardsection/Demo'
import Error from './Pages/error/Err';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />  
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<Error />}></Route>


          </Routes>
        </Router>
    </div>
  );
}

export default App;
