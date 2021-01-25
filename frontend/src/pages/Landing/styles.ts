import styled from 'styled-components'
import { shade } from 'polished'

export const Section = styled.section`
  width: 100vh;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  span {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-left: 0.8rem;
    }
  }
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`

export const HeroImage = styled.div`
  img {
    width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    margin-right: 1.6rem;
    font: 500 2.0rem Archivo;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-button-text);
    transition: background-color 0.2s;

    img {
      width: 4rem;
    }

    &.study {
      background: var(--color-primary-lighter);
      
      &:hover {
        background: var(--color-primary-light);
      }
    }

    &.give-classes {
      background: var(--color-secundary);

      &:hover {
        background: var(--color-secundary-dark);
      }
    }

    & + a {
      margin-right: 0;
    }
  }  
`
