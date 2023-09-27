import { useState } from 'react'
import { useEventsContext } from '../hooks/UseEventsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const EventForm = () => {
  const { dispatch } = useEventsContext()
  const {user} = useAuthContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user) {
      setError("You must be logged in")
      return
    }

    const event = {title, description, date}
    
    const response = await fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${user.token}`
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
      setDate('')
      console.log('new event added', json)
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
        placeholder='Beskriv begivenheden'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={`form-control ${emptyFields.includes('description') ? 'error' : ''}`}
        id="description"
        rows="3"
      />  
      </div>

      <div className='mb-3'>
      <label htmlFor="date" className='form-label'>Date:</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className={`form-control ${emptyFields.includes('date') ? 'error' : ''}`}
        id="date"
      />
      </div>

      <button type="submit" className="btn btn-success">Submit</button>
      
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default EventForm;