import styled from 'styled-components'
import { shade } from 'polished'

const size = {
  desktop: '1100px'
}

export const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  span {
    grid-area: total;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${size.desktop}) {
      justify-content: flex-end;
      text-align: center;
    }

    img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: ${size.desktop}) {
   .container {
      max-width: ${size.desktop}; 
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: 
      "logo hero hero"
      "buttons buttons total"
    }
  } 
`

export const LogoContainer = styled.div`
  grid-area: logo;
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

    @media (min-width: ${size.desktop}) {
      text-align: initial;
      font-size: 3.0rem;
    }
  }

  @media (min-width: ${size.desktop}) {
    align-self: center;
    text-align: left;
    margin: 0;
  }
`

export const HeroImage = styled.div`
  grid-area: hero;

  img {
    width: 100%;
  }

  @media (min-width: ${size.desktop}) {
    justify-self: end;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  grid-area: buttons;

  a {
    width: 28rem;
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
      margin-right: 2.4rem;
    }

    &.study {
      background: var(--color-primary-lighter);
      
      &:hover {
        background: var(--color-primary-light);
      }
    }

    &.give-classes {
      background: var(--color-secondary);

      &:hover {
        background: var(--color-secondary-dark);
      }
    }

    & + a {
      margin-right: 0;
    }

    @media (min-width: ${size.desktop}) {
      font-size: 2.4rem;
    }
  }

  @media (min-width: ${size.desktop}) {
    justify-content: flex-start;
  }
`
