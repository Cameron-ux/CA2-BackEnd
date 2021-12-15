
import './App.css';
import Pokemons from './components/Pokemons';
import PokemonEdit from './components/PokemonEdit';
import PokemonView from './components/PokemonView';
import PokemonAdd from './components/PokemonAdd';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Pokemons />} />
        <Route path="/editPokemon" element={<PokemonEdit />} />
        <Route path="/viewPokemon" element={<PokemonView />} />
        <Route path="/addPokemon" element={<PokemonAdd />} />
      </Routes>
    </div>
  );
}

export default App;

