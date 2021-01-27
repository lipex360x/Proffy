import styled from 'styled-components'
import { shade } from 'polished'

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: green;
`

export const Header = styled.header`
  background-color: var(--color-primary);
`

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.6rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);

  & > img {
    height: 1.6rem;
  }

  a {
    height: 3.2rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6
    }
  }
`

export const Container = styled.div`
 width: 90%;
 position: relative;
 margin: 3.2rem auto;

 strong {
  font: 700 3.6rem Archivo;
  line-height: 4.2rem;
  color: var(--color-title-in-primary)
 }
`
