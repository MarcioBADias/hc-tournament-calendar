import React, { useState } from 'react'
import { TournamentForm } from '../tournamentForm'

const CalendarPage = () => {
  const [tournaments, setTournaments] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)

  const addTournament = (tournament) => {
    setTournaments((prevTournaments) => [...prevTournaments, tournament])
  }

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  const sortedTournaments = [...tournaments].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  return (
    <div>
      <button onClick={toggleForm}>Adicionar Torneio</button>

      {isFormOpen && (
        <TournamentForm addTournament={addTournament} closeForm={toggleForm} />
      )}

      <h2>Calendário de Torneios</h2>
      <ul>
        {sortedTournaments.map((tournament, index) => (
          <li key={index}>
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
