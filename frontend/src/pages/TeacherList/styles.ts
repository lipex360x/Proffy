import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    margin: 0 auto;
    display: grid;
    column-gap: 16px;
  }
`

export const InputList = styled.div`
  width: 90%;
  margin: 1.6rem auto;

 @media (min-width: 700px) {
    max-width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.6rem;
  }
`

export const InputItem = styled.div`
  position: relative;

  & + div{
    margin-top: 20px;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  &:focus-within::after {
    content: '';
    width: calc(100% - 3.2rem);
    height: 2px;
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    & + div{
      margin-top: 0;
    }
  }
`
