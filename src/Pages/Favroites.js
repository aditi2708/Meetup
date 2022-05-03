import { useContext } from 'react';
import FavoritesContext from '../Store/favorites-context';
import MeetupList from '../Components/layout/meetups/meetuplist';
function FavroitesPage(){
    const favoritesCtx= useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0){
        content=<p>You got no favourites yet !</p>;
    }else{
        content=<MeetupList meetups={favoritesCtx.favorites}/>;
    }
    return (<section>
        <h1>My Favourites</h1>
        {content}
    </section>
    );
}
export default FavroitesPage;