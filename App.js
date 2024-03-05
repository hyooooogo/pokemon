import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState('');
  const [previousURL, setPreviousURL] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      let res = await getAllPokemon(URL);
      loadPokemon(res.results);
      // console.log(res.results);
      setNextURL(res.next);
      setPreviousURL(res.previous);
      setLoading(false);
    };
    fetchPokemon();
  
  }, []);
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);
  const handleNexrPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPreviousURL(data.previous);
    // console.log(data);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if(!previousURL) return;
    setLoading(true);
    let data = await getAllPokemon(previousURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPreviousURL(data.previous);
    setLoading(false);
  };

  
  return (
    <>
      <Header />
      <div className="App">
        {loading ? (
          <div id="container">
          <span></span>
          <span></span>
          <span></span>
          <p>LOADING</p>
        </div>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button className="btn-gradient-flat" onClick={handlePrevPage}>前へ</button>
              <button className="btn-gradient-flat" onClick={handleNexrPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
