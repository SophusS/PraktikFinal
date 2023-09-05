import { useEventsContext } from "../hooks/UseEventsContext";

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'

const EventDetails = ({ event }) => {
    const { dispatch } = useEventsContext()

    const handleClick = async () => {
        const response = await fetch('/api/events/' + event._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if(response.ok) {
            dispatch({type: 'DELETE_EVENT', payload: json})
        }
    }

    //Format start date
    const formattedDate = event.date ? format(new Date(event.date), 'dd/MM/yyyy') : '';

    return (
        <div className='card text-bg-light mb-3' style={{width: "50rem"}}>
            <div className='card-body'>
                <h4 className='card-title'>{event.title}</h4>
                <p className='card-text'><strong>Description: </strong>{event.description}</p>
                <p><strong>Start date: </strong>{formattedDate}</p>
                <p>{formatDistanceToNow(new Date(event.createdAt), { addSuffix: true })}</p>
                <span className="btn btn-danger" onClick={handleClick}>Delete</span>
            </div>
        </div>
    )
}

export default EventDetails;