import { styled } from 'styled-components'

export const Container = styled.ul`
  margin: 1rem 0;
`
export const EventBox = styled.li`
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-dark)
  );
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin: 0.75rem 0;
`
export const Month = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
`
