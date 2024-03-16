import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokedex">Pokedex</NavLink>
      <NavLink to="leaderboard">Leaderboard</NavLink>
      <div>
        <h1>Welcome to our site!</h1>
        <p>We are your one-stop-shop for all things so-and-so.</p>
      </div>
    </>
  );
}

export default Landing;