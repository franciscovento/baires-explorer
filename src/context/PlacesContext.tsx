import places from '../data/places.json';
import { createContext, useEffect, useReducer } from 'react';
import { Place } from '../interfaces/places.interface';
import PlacesReducer from './PlacesReducer';
import useLocalStorage from '../hooks/useLocalStorage';

export type PlacesContextState = {
  places: Place[];

  // methods
  changuePosition: (initial: number, destination: number) => void;
  toggleFavorite: (id: number) => void;
};

const PlacesContext = createContext<PlacesContextState>({
  places: [],
  changuePosition: () => {},
  toggleFavorite: () => {},
});

const PlacesProvider = ({ children }: any) => {
  const [items, setItems] = useLocalStorage('places', places);
  const [placesState, dispatch] = useReducer(PlacesReducer, {
    places: items || [],
  });

  const changuePosition = (initial: number, destination: number) => {
    dispatch({
      type: 'CHANGE_POSITION',
      payload: {
        destination,
        initial,
      },
    });
  };

  const toggleFavorite = (id: number) => {
    console.log('id:', id);
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: {
        id,
      },
    });
  };

  const INITIAL_STATE = {
    places: placesState.places,
    changuePosition,
    toggleFavorite,
  };

  useEffect(() => {
    setItems(placesState.places);
  }, [placesState.places]);

  return (
    <PlacesContext.Provider value={INITIAL_STATE}>
      {children}
    </PlacesContext.Provider>
  );
};

export { PlacesContext, PlacesProvider };
