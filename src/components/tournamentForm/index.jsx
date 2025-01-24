import React from 'react'

const TournamentForm = ({ addTournament, closeForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTournament = {
      name: e.target.name.value,
      date: e.target.date.value,
      location: e.target.location.value,
      league: e.target.league.value,
    }

    addTournament(newTournament)
    closeForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastrar Torneio</h3>
      <div>
        <label>Nome do Evento:</label>
        <input type="text" name="name" placeholder="nome do evento" required />
      </div>
      <div>
        <label>Data:</label>
        <input
          type="datetime-local"
          name="date"
          placeholder="data do evento"
          required
        />
      </div>
      <div>
        <label>Liga:</label>
        <select name="league" placeholder="liga do evento" required>
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
          name="location"
          placeholder="local do evento"
          required
        />
      </div>
      <button className="btn" type="submit">
        Cadastrar Torneio
      </button>
      <button className="btn" type="button" onClick={closeForm}>
        Cancelar
      </button>
    </form>
  )
}

export { TournamentForm }
