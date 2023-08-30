import { EventsContext } from '../context/EventsContext'
import { useContext } from 'react';

//custom hook to use the events context
export const useEventsContext = () => {
    const context = useContext(EventsContext);

    if(!context) {
        throw Error('useEventsContext must be used within a EventsContextProvider')
    }

    return context;
}