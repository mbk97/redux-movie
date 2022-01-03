import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import MovieDetail from './Components/MovieDetail/MovieDetail'
import PageNotFound from './Components/404/PageNotFound'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Router>
         
         <Header />
      <div className="container">
          <Routes>
       <Route path= '/' exact element={<Home />} />

        <Route path= '/movie/:imdbID' element={<MovieDetail />} />

         <Route  element={<PageNotFound />} />
            </Routes>
    </div>

            <Footer />
        </Router>
    </div>
  );
}

export default App;


