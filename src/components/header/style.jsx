import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem auto;
  display: flex;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: 5rem;
  }
`

export const Logo = styled.img`
  width: 45vw;

  @media (min-width: 600px) {
    width: 15vw;
  }
`
