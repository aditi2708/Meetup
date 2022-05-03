import Card from '../../ui/Card';
import classes from './meetupitem.module.css';
import {useContext} from 'react';
import FavoritesContext from '../../../Store/favorites-context';

function MeetupItem(props){
     const favoritesCtx =useContext(FavoritesContext);
     const itemIsFavroite= favoritesCtx.itemIsFavroite(props.id);
    function toggleFavoritesStatusHandler(){
if(itemIsFavroite){
    favoritesCtx.removeFavroite(props.id);
}else{
    favoritesCtx.addFavroite({
        id:props.id,
        title:props.title,
        description: props.description,
        image: props.image,
        address: props.address,
    })
}
    }
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoritesStatusHandler}>{itemIsFavroite ? 'Remove from Favourites':'To Favourites'}</button>
        </div>
        </Card>
    </li>
}
export default MeetupItem;
