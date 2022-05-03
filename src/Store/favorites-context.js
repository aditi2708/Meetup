import { createContext,useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavroite: (favroiteMeetup)=>{},
  removeFavroite:(meetupId) => {},
  itemIsFavroite:(meetup)=>{}
});

 export function FavoritesContextProvider(props) {
    const [userFavorites,setUserFavroites]=useState([]);
  
  function addFavroitesHandeler(favroiteMeetup){
      setUserFavroites((prevUserFavorites)=>{
return prevUserFavorites.concat(favroiteMeetup);
      });
  }
  function  removeFavroitesHandler(meetupId){
      setUserFavroites(prevUserFavorites=>{
          return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
      });
  }
  function itemIsFavroiteHandler (meetupId){
      return userFavorites.some(meetup => meetup.id ===  meetupId);
  }
  
  
    const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavroite: addFavroitesHandeler,
      removeFavroite: removeFavroitesHandler,
      itemIsFavroite: itemIsFavroiteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
        {props.children}
        </FavoritesContext.Provider>
  );
}
export default FavoritesContext;