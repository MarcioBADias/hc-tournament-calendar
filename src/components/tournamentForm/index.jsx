import React, { useState } from 'react'

const TournamentForm = ({ addTournament, closeForm }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [league, setLeague] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && date && league && location) {
      addTournament({
        name,
        date,
        league,
        location,
      })
      closeForm()
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastrar Torneio</h3>
      <div>
        <label>Nome do Evento:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Liga:</label>
        <select
          value={league}
          onChange={(e) => setLeague(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Cabo Frio">Cabo Frio</option>
          <option value="Nova Iguaçu">Nova Iguaçu</option>
          <option value="Juiz de Fora">Juiz de Fora</option>
          <option value="Taubaté">Taubaté</option>
        </select>
      </div>
      <div>
        <label>Local:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Torneio</button>
      <button type="button" onClick={closeForm}>
        Cancelar
      </button>
    </form>
  )
}

export { TournamentForm }
