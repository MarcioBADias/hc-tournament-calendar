import React, { useReducer } from 'react'
import { TournamentForm } from '../tournamentForm'
import * as S from './style'

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

const currentMOnth = new Date(tournament.date)
  .toLocaleString('pt-BR', {
    month: 'short',
  })
  .toUpperCase()

const currentHour = new Date(tournament.date).toLocaleString('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
})

const CalendarPage = () => {
  const [state, dispatch] = useReducer(reduce, initialState)

  const addTournament = (tournament) => {
    dispatch({ type: 'add_event', tournament })
  }

  const toggleForm = () => {
    dispatch({ type: 'toggle_state_form' })
  }

  const sortedTournaments = [...state.tournaments].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
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
      <S.Container>
        {sortedTournaments.map((tournament, index) => (
          <S.EventBox className="eventContainer" key={index}>
            <S.Month>{currentMOnth}</S.Month>
            <div>
              <p>Comeco as {currentHour} horas</p>
              <h2>{tournament.name}</h2>
              <p>
                <strong>Local:</strong> {tournament.location}
              </p>
              <p>
                <strong>Liga:</strong> {tournament.league}
              </p>
            </div>
            <img src="#" alt="Logo da Liga" />
          </S.EventBox>
        ))}
      </S.Container>
    </div>
  )
}

export { CalendarPage }
