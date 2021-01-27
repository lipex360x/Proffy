import styled from 'styled-components'

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.6rem 0;

  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color-text-in-primary);

  & > img {
    height: 1.6rem;
  }
`

export const Container = styled.div`
 
`
