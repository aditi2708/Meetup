import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../../Store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favroites">My Favourites
            <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
