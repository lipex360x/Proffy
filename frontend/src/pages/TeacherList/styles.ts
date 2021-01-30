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

export const TeacherList = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`
export const TeacherItem = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: var(--color-text-title)
      }

      span {
        font-size: 1.4rem;
        display: block;
        margin-top: 0.4rem;
      }
    }
  }

  p.teacherInfo {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p > strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;
    }

    button {
      width: 20rem;
      height: 5.6rem;
      background: var(--color-secondary);
      color: var(--color-button-text);
      border-radius: 0.8rem;
      font: 700 1.4rem Archivo;

      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2s;

      &:hover {
        background: var(--color-secondary-dark)
      }
    }
  }
`
