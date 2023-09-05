import { createContext, useReducer } from "react";

export const EventsContext = createContext();

// This keeps the local state (what you see on the page) in sync with the database.
export const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        events: action.payload
      }
    case 'CREATE_EVENT':
      return {
        events: [action.payload, ...state.events] // ...state.events is the previous state
      }
    case 'DELETE_EVENT':
      return {
        events: state.events.filter((event) => event._id !== action.payload._id)
      }
    default:
      return state;
  }
}

export const EventsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, { 
    events: null
  });
      
  return (
    <EventsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </EventsContext.Provider>
  );
}