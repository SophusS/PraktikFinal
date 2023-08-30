import { useState } from 'react'
import { useEventsContext } from '../hooks/UseEventsContext'

const EventForm = () => {
  const { dispatch } = useEventsContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [transportation, setTransportation] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const event = {title, description, location, transportation}
    
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setDescription('')
      setLocation('')
      setTransportation('')
      dispatch({type: 'CREATE_EVENT', payload: json})
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">

      <div className='mb-3'>
      <label htmlFor="title" className='form-label'>Title:</label>
      <input 
        type="text" 
        placeholder='Titlen på din begivenhed'
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={`form-control ${emptyFields.includes('title') ? 'error' : ''}`}
        id="title"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="description" className='form-label'>Description:</label>
      <textarea
        type="text"
        placeholder='Beskriv beginheden'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={`form-control ${emptyFields.includes('description') ? 'error' : ''}`}
        id="description"
        rows="3"
      />  
      </div>

      <div className='mb-3'>
      <label htmlFor="location" className='form-label'>Location:</label>
      <input
        type="text"
        placeholder='Hvor er det henne?'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={`form-control ${emptyFields.includes('location') ? 'error' : ''}`}
        id="location"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="transportation" className='form-label'>Transportation:</label>
      <input
        type="text"
        placeholder='Hvordan kan du nå frem?'
        onChange={(e) => setTransportation(e.target.value)}
        value={transportation}
        className={`form-control ${emptyFields.includes('transportation') ? 'error' : ''}`}
        id="transportation"
      />
      </div>

      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  )
}

export default EventForm;