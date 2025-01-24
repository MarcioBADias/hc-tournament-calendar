import React, { useReducer } from 'react'
import { TournamentForm } from '../tournamentForm'

const reduce = (state, action) => {
  if (action.type === 'add_event') {
    return { ...state, tournaments: [...state.tournaments, action.tournament] }
  }

  if (action.type === 'toggle_state_form') {
    return { ...state, isFormOpen: !state.isFormOpen }
  }

  return state
}

const initialState = {
  tournaments: [],
  isFormOpen: false,
}

const CalendarPage = () => {
  const [state, dispatch] = useReducer(reduce, initialState)

  const addTournament = (tournament) => {
    dispatch({ type: 'add_event', tournament })
  }

  const toggleForm = () => {
    dispatch({ type: 'toggle_state_form' })
  }

  const sortedTournaments = [...state.tournaments].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <div>
      <button className="btn" onClick={toggleForm}>
        Adicionar Torneio
      </button>

      {state.isFormOpen && (
        <TournamentForm addTournament={addTournament} closeForm={toggleForm} />
      )}

      <h2>Calendário de Torneios</h2>
      <ul className="container">
        {sortedTournaments.map((tournament, index) => (
          <li className="eventContainer" key={index}>
            <h3>{tournament.name}</h3>
            <p>
              <strong>Data:</strong>{' '}
              {new Date(tournament.date).toLocaleString()}
            </p>
            <p>
              <strong>Local:</strong> {tournament.location}
            </p>
            <p>
              <strong>Liga:</strong> {tournament.league}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { CalendarPage }
