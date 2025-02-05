import { styled } from 'styled-components'
import { BiSolidArchiveOut } from 'react-icons/bi'

export const Container = styled.ul`
  margin: 1rem 0;
`
export const EventBox = styled.li`
  align-items: center;
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-dark)
  );
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 1rem;
  margin: 0.75rem 0;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`
export const Month = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
`

export const LogoIcon = styled.img`
  border-radius: 50%;
  width: 25%;
  height: 25%;

  @media (min-width: 600px) {
    margin-left: 5rem;
    width: 10%;
    height: 10%;
  }
`

export const ClickedIcons = (icon) => styled(icon)`
  min-width: 50px;
  min-height: 50px;

  @media (min-width: 600px) {
    width: 30%;
    height: 30%;
  }
`
