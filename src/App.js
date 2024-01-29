import logo from './logo.svg';
import './App.css';
import movies from './movies';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      {
        movies.map(v => <Movie 
          name={v.name} 
          year={v.year} 
          rating={v.rating} 
          img={v.image}/>)
      }
    </div>
  );
}

export default App;
