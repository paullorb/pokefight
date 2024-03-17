import { NavLink } from "react-router-dom";
import YourPokemons from "./YourPokemons";
import style from '../styles/Landing.module.css';

function Landing() {
  return (
    <>
    <nav className={style.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
        <button>🌑</button>
      </nav>
      <div>
        <h1>Pokefight!</h1>
        <p></p>
      </div>
      <YourPokemons />
    </>
  );
}

export default Landing;