import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoriteContextProvider({children}){
  const [favoriteMealIds, setFavoriteMealIds] = useState([])
  const addFavorite = (id) => {
    console.log("addFavorite", id);
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  const removeFavorite = (id) => {
    console.log("removeFavorite", id);
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter((favId) => favId !== id));
  }

  const isFavoriteId = (id) => {
    return favoriteMealIds.includes(id)
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
    isFavoriteId,
  }
  return (<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>)
}

