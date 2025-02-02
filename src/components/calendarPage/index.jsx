import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { TournamentForm } from '../tournamentForm'
import { BiSolidArchiveOut } from 'react-icons/bi'
import { TiDelete, TiInputChecked } from 'react-icons/ti'
import * as S from './style'

const API_endPoint =
  'https://hc-tournament-calendar-backend-production.up.railway.app'

const reduce = (state, action) => {
  if (action.type === 'set_tournament') {
    return { ...state, tournaments: action.tournaments }
  }
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

const currentMOnth = (date) =>
  new Date(date)
    .toLocaleString('pt-BR', {
      month: 'short',
    })
    .toUpperCase()

const currentHour = (date) =>
  new Date(date).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

const CalendarPage = () => {
  const [state, dispatch] = useReducer(reduce, initialState)

  useEffect(() => {
    axios
      .get(`${API_endPoint}/api/tournaments`)
      .then((res) =>
        dispatch({ type: 'set_tournament', tournaments: res.data }),
      )
      .catch((error) => console.log('erro ao buscar os torneios: ', error))
  }, [])

  const addNewTournament = (tournament) => {
    axios
      .post(`${API_endPoint}/api/tournaments`, tournament)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          dispatch({ type: 'add_event', tournament: res.data })
          console.log('Torneio adicionado com sucesso', res.data)
        } else {
          console.log('resposta inesperada do servidor', res)
        }
      })
      .catch((error) => console.log('erro ao criar o torneio: ', error))
  }

  const deleteTournament = (id) => {
    window.confirm('Tem certeza que deseja excluir esse torneio?') &&
      axios
        .delete(`${API_endPoint}/api/tournaments/${id}`)
        .then((res) => {
          res.status === 200 &&
            dispatch({
              type: 'set_tournament',
              tournaments: state.tounaments.filter(
                (tournament) => tournament._id !== id,
              ),
            })
        })
        .catch((error) =>
          console.log('Erro ao tentar deletaro torneio: ', error),
        )
  }

  const toggleForm = () => {
    dispatch({ type: 'toggle_state_form' })
  }

  const leagueLogo = (league) => {
    switch (league) {
      case 'Rio de Janeiro':
        return '/fellowshipClix.png'

      case 'Cabo Frio':
        return '/lagosClix.png'

      case 'Nova Iguaçu':
        return '/novaIguacuCLix.png'

      default:
        return 'inter_League.png'
    }
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
        <TournamentForm
          addTournament={addNewTournament}
          closeForm={toggleForm}
        />
      )}

      <h2 style={{ marginLeft: '1rem' }}>Próximo evento:</h2>
      <S.Container>
        {sortedTournaments.map((tournament, index) => (
          <S.EventBox className="eventContainer" key={index}>
            <S.Month>{currentMOnth(tournament.date)}</S.Month>
            <div>
              <p>Inicio as {currentHour(tournament.date)} horas</p>
              <h2>{tournament.name}</h2>
              <p>
                <strong>Local:</strong> {tournament.location}
              </p>
              <p>
                <strong>Liga:</strong> {tournament.league}
              </p>
            </div>
            <S.LogoIcon
              src={leagueLogo(tournament.league)}
              alt="Logo da Liga"
            />
            <div>
              <TiDelete onClick={() => deleteTournament(tournament._id)} />
              <TiInputChecked />
              <BiSolidArchiveOut />
            </div>
          </S.EventBox>
        ))}
      </S.Container>
    </div>
  )
}

export { CalendarPage }
