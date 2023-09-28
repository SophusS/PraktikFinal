import { useEffect } from "react";
import { useEventsContext } from '../hooks/UseEventsContext'
import { useAuthContext } from "../hooks/useAuthContext";

//components
import EventDetails from "../components/EventDetails";

const Home = () => {
    const {events, dispatch} = useEventsContext()
    const {user} = useAuthContext()
    //empty array as second argument to prevent useEffect from running more than once
    //fetch uses proxy in package.json to connect to backend, only works in development
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events', {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                  }
            })
            const json = await response.json()

            console.log(response)

            if(response.ok) {
                dispatch({type: 'SET_EVENTS', payload: json})
            }   
        }
        if(user) {
            fetchEvents()
          }
        }, [dispatch, user])

    return (
        <div className="center">
            <div className="">
                <h1 className="center">Velkommen til vores hjemmeside</h1>
                { events && events.map((event) => (
                    <EventDetails key={event._id} event={event}/>
                ))}
            </div>
        </div>
    )
}

export default Home;