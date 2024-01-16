import { Place } from '../interfaces/places.interface';

export type PlacesActions =
  | { type: 'ADD_PLACE'; payload: Place }
  | { type: 'TOGGLE_FAVORITE'; payload: { id: number } }
  | { type: 'TOGGLE_VISITED'; payload: { id: number } }
  | {
      type: 'CHANGE_POSITION';
      payload: {
        initial: number;
        destination: number;
      };
    };

const PlacesReducer = (state: { places: Place[] }, action: PlacesActions) => {
  let newItems: Place[];
  switch (action.type) {
    case 'ADD_PLACE':
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    case 'TOGGLE_FAVORITE':
      const index = state.places.findIndex(
        (item: Place) => item.id === action.payload.id
      );

      newItems = [...state.places];
      const isFavorite = newItems[index].isFavorite;
      newItems[index].isFavorite = !isFavorite;
      return { ...state, places: newItems };
    case 'TOGGLE_VISITED':
      const visitedIndex = state.places.findIndex(
        (item: Place) => item.id === action.payload.id
      );
      const newVisitedItems = [...state.places];
      newVisitedItems[visitedIndex].visited = newVisitedItems[visitedIndex]
        .visited
        ? null
        : new Date();
      return {
        ...state,
        places: newVisitedItems,
      };
    case 'CHANGE_POSITION':
      newItems = [...state.places];
      const oldIndex = newItems.findIndex(
        (item: Place) => item.id === action.payload.initial
      );
      const newIndex = newItems.findIndex(
        (item: Place) => item.id === action.payload.destination
      );
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, state.places[oldIndex]);
      return {
        ...state,
        places: newItems,
      };
    default:
      return state;
  }
};

export default PlacesReducer;
